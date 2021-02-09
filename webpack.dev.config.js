const path = require('path');
const { createConfig } = require('@edx/frontend-build');
const { ModuleFederationPlugin } = require('webpack').container;

const PUBLIC_PATH = process.env.PUBLIC_PATH || '/';
const deps = require('./package.json').dependencies;

module.exports = createConfig('webpack-dev', {
  output: {
    publicPath: 'auto', // Necessary to get remote script loading working.  Maybe something tod o witho our dev.publicPath stuff below?
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'pluginTest',
      filename: 'remoteEntry.js',
      exposes: {
        './PluginTestPage': './src/PluginTestPage',
      },
      shared: {
        react: {
          requiredVersion: deps.react,
          import: 'react', // the "react" package will be used a provided and fallback module
          shareKey: 'react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          singleton: true, // only a single version of the shared module is allowed
        },
        '@edx/frontend-platform': {
          requiredVersion: deps['@edx/frontend-platform'],
          singleton: true,
        },
      },
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 7331,
    historyApiFallback: {
      index: path.join(PUBLIC_PATH, 'index.html'),
    },
    dev: {
      publicPath: PUBLIC_PATH,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
