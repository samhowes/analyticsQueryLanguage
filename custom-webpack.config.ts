import * as path from 'path';
import * as webpack from 'webpack';

const exportConfig = async (config: webpack.Configuration, options) => {
  const splitChunks = config.optimization
    .splitChunks as webpack.Options.SplitChunksOptions;
  const MONACO_REGEX = /[\\/]node_modules[\\/](monaco-editor-core)[\\/]/;
  // const LANG_PATH = path.resolve(__dirname, 'src/app/lang');
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
    // {
    //   include: LANG_PATH,
    //   use: ['ts-loader'],
    // },
    {
      exclude: [
        MONACO_REGEX,
        // LANG_PATH
      ],
      rules: rules,
    },
  ];

  config.output.globalObject = 'self';

  return config;
};

export default exportConfig;
