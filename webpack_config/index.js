// Depends
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Modules
import { appPath, buildPath, tmpPath, stylePath } from './path';

import { resolve, module, makehash } from './settings';

// Const Variables
const ENV = process.env.NODE_ENV;
const PROD = ENV === 'production';
const DEV = ENV === 'development';

// Plugins collection
const plugins = [
  new HtmlWebpackPlugin({
    title: 'SPA',
    chunks: [
      'application',
      'vendors'
    ],
    template: `${tmpPath}/index.html`
  }),

  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(ENV)
  }),

  new webpack.NoEmitOnErrorsPlugin()
];

PROD && plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warning: false,
      drop_console: true,
      unsafe: true
    }
  })
);

/**
 * Global webpack config
 * Include:
 *  - name
 *  - watch
 *  - devServer
 *    - hot
 *    - port
 *  - entry
 *    - vendors
 *    - application
 *  - output
 *    - path
 *    - filename
 *    - publicPath
 *  - develop
 *  - resolve
 *    - modules
 *    - alias
 *    - extensions
 *  - module
 *    - rules
 *  - plugins
 *    - HtmlWebpackPlugin
 *    - webpack.DefinePlugin
 *    - webpack.NoEmitOnErrorsPlugin
 *    - webpack.optimize.UglifyJsPlugin
 */
export default {
  name: 'application',
  watch: DEV,

  devServer: {
    hot: DEV,
    port: 8080
  },

  entry: {
    vendors: [
      'react',
      'react-dom',
      `${stylePath}/index.sass`
    ],
    application: `${appPath}/js/index.js`
  },

  output: {
    path: buildPath,
    filename: makehash('ssr.[name].js', 'hash:8'),
    publicPath: '/'
  },

  devtool: PROD
    ? 'cheap-inline-module-source-map' : 'source-map',

  resolve,
  module,

  plugins: [
    ...plugins
  ]
};
