import * as webpack from 'webpack';
const MONACO_REGEX = /[\\/]node_modules[\\/](monaco-editor-core)[\\/]/;

// export a function so we can re-arrange the existing rules in `config`
export default async (config: webpack.Configuration, options) => {
  // grab the existing rules configured by angular
  const rules = config.module.rules;
  // replace the rules
  config.module.rules = [
    {
      // Cusotm config just for monaco to load its styles
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
    // nest the original rules making sure they don't process any monaco files
    {
      exclude: MONACO_REGEX,
      rules: rules,
    },
  ];

  // don't know if this is actually necessary
  config.output.globalObject = 'self';

  // put monaco in its on bundle
  const splitChunks = config.optimization
    .splitChunks as webpack.Options.SplitChunksOptions;
  splitChunks.cacheGroups['monaco'] = {
    test: MONACO_REGEX,
    enforce: true,
    name: 'monaco',
    chunks: 'all',
  };

  return config;
};
