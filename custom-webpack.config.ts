import * as fs from 'fs';
import * as path from 'path';
import { bold } from 'chalk';
import * as webpack from 'webpack';
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

class StatsSerializeStream extends Readable {
  constructor(stats) {
    super();
    this._indentLevel = 0;
    this._stringifier = this._stringify(stats);
  }

  get _indent() {
    return '  '.repeat(this._indentLevel);
  }

  _read() {
    let readMore = true;

    while (readMore) {
      const { value, done } = this._stringifier.next();

      if (done) {
        this.push(null);
        readMore = false;
      } else {
        readMore = this.push(value);
      }
    }
  }

  *_stringify(obj) {
    if (
      typeof obj === 'string' ||
      typeof obj === 'number' ||
      typeof obj === 'boolean' ||
      obj === null
    ) {
      yield JSON.stringify(obj);
    } else if (Array.isArray(obj)) {
      yield '[';
      this._indentLevel++;

      let isFirst = true;
      for (let item of obj) {
        if (item === undefined) {
          item = null;
        }

        yield `${isFirst ? '' : ','}\n${this._indent}`;
        yield* this._stringify(item);
        isFirst = false;
      }

      this._indentLevel--;
      yield obj.length ? `\n${this._indent}]` : ']';
    } else {
      yield '{';
      this._indentLevel++;

      let isFirst = true;
      const entries = Object.entries(obj);
      for (const [itemKey, itemValue] of entries) {
        if (itemValue === undefined) {
          continue;
        }

        yield `${isFirst ? '' : ','}\n${this._indent}${JSON.stringify(
          itemKey
        )}: `;
        yield* this._stringify(itemValue);
        isFirst = false;
      }

      this._indentLevel--;
      yield entries.length ? `\n${this._indent}}` : '}';
    }
  }
}

exports.StatsSerializeStream = StatsSerializeStream;
exports.writeStats = writeStats;

async function writeStats(stats, filepath) {
  return new Promise((resolve, reject) => {
    new StatsSerializeStream(stats)
      .on('end', resolve)
      .on('error', reject)
      .pipe(createWriteStream(filepath));
  });
}
export class BundleAnalyzerPlugin {
  compiler: webpack.Compiler;
  constructor(opts = {}) {}

  apply(compiler) {
    this.compiler = compiler;
    console.log('apply!!!!');
    const done = (stats, callback) => {
      callback = callback || (() => {});

      const actions = [async () => await this.generateStatsFile()];

      if (actions.length) {
        // Making analyzer logs to be after all webpack logs in the console
        setImmediate(async () => {
          try {
            await Promise.all(actions.map((action) => action()));
            callback();
          } catch (e) {
            callback(e);
          }
        });
      } else {
        callback();
      }
    };

    if (compiler.hooks) {
      compiler.hooks.done.tapAsync('webpack-bundle-analyzer', done);
    } else {
      compiler.plugin('done', done);
    }
  }

  async generateStatsFile() {
    const statsFilepath = path.resolve(this.compiler.outputPath, 'foo.json');
    await fs.promises.mkdir(path.dirname(statsFilepath), { recursive: true });

    try {
      const getCircularReplacer = () => {
        const seen = new WeakSet();
        return (key, value) => {
          if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
              return;
            }
            seen.add(value);
          }
          return value;
        };
      };

      await fs.promises.writeFile(
        statsFilepath,
        JSON.stringify(this.compiler.options, getCircularReplacer(), 2)
      );

      console.log(
        `${bold('Webpack Bundle Analyzer')} saved stats file to ${bold(
          statsFilepath
        )}`
      );
    } catch (error) {
      console.log(
        `${bold('Webpack Bundle Analyzer')} error saving stats file to ${bold(
          statsFilepath
        )}: ${error}`
      );
    }
  }
}

// const config = {
//   resolve: {
//     extensions: ['.cool'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.cool$/,
//         use: ['css-loader'],
//       },
//     ],
//   },
//   plugins: [new BundleAnalyzerPlugin()],
// } as webpack.Configuration;

async function generateStatsFile(obj) {
  const statsFilepath = path.resolve('foo.js');
  await fs.promises.mkdir(path.dirname(statsFilepath), { recursive: true });

  try {
    const always = new Set<string>(['test', 'exclude', 'include']);
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key, value) => {
        if (always.has(key)) {
          return value.toString();
        }
        if (value instanceof RegExp) {
          return value.toString();
        }
        if (typeof value === 'object' && value !== null) {
          if (seen.has(value)) {
            return 'skipped';
          }
          seen.add(value);
        }
        return value;
      };
    };
    let jsonString =
      'const obj = ' + JSON.stringify(obj, getCircularReplacer(), 2);
    // jsonString = jsonString.replace(/"(\/.*\/)"/g, '$1');
    // jsonString = jsonString.replace(/\\\\/g, '\\');
    jsonString = jsonString.replace(/"(\w+)":/g, '$1:');

    await fs.promises.writeFile(statsFilepath, jsonString);

    console.log(
      `${bold('Webpack Bundle Analyzer')} saved stats file to ${bold(
        statsFilepath
      )}`
    );
  } catch (error) {
    console.log(
      `${bold('Webpack Bundle Analyzer')} error saving stats file to ${bold(
        statsFilepath
      )}: ${error}`
    );
  }
}

const exportConfig = async (config: webpack.Configuration, options) => {
  const splitChunks = config.optimization
    .splitChunks as webpack.Options.SplitChunksOptions;
  const MONACO_REGEX = /[\\/]node_modules[\\/](monaco-editor-core)[\\/]/;
  splitChunks.cacheGroups['monaco'] = {
    test: MONACO_REGEX,
    enforce: true,
    name: 'monaco',
    chunks: 'all',
  };

  const rules = config.module.rules;
  config.module.rules = [
    {
      test: MONACO_REGEX,
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.ttf$/,
          use: ['file-loader'],
        },
      ],
    },
    {
      exclude: MONACO_REGEX,
      rules: rules,
    },
  ];

  config.entry['editor.worker'] =
    'monaco-editor-core/esm/vs/editor/editor.worker.js';
  config.output.globalObject = 'self';

  await generateStatsFile({ config, options });

  return config;
};

export default exportConfig;
