const moduleResolverAlias = require('./alias').babelModuleResolverAlias;

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['react-native-paper/babel'],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          navigation: './src/navigation',
          components: './src/components',
          utils: './src/utils',
          pages: './src/pages',
          assets: './assets',
          store: './src/store',
          palette: './src/palette',
          ...moduleResolverAlias,
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
