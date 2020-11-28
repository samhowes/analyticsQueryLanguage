import * as webpack from 'webpack';

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

  // const rules = config.module.rules;
  // config.module.rules = [
  //   {
  //     test: MONACO_REGEX,
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         use: ['style-loader', 'css-loader'],
  //       },
  //       {
  //         test: /\.ttf$/,
  //         use: ['file-loader'],
  //       },
  //     ],
  //   },
  //   {
  //     exclude: MONACO_REGEX,
  //     rules: rules,
  //   },
  // ];

  // config.entry['editor.worker'] =
  //   'monaco-editor-core/esm/vs/editor/editor.worker.js';
  // config.entry['todoLangWorker'] = './src/app/lang/monaco/monaco.worker.ts';
  // config.output.globalObject = 'self';

  return config;
};

export default exportConfig;
