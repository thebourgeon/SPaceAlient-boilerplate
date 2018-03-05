// Depends
import autoprefixer from 'autoprefixer';

// Modules
import { appPath, mediaPath, stylePath } from './path';

const ENV = process.env.NODE_ENV;
const PROD = ENV === 'production';

// Function make unique hash
export const makehash = (
  tmp,
  hash
) => PROD
  ? tmp.replace(/\.[^.]+$/, `.[${hash}]$&`)
  : `${tmp}?hash=[${hash}]`;

// Resolves modules
export const resolve = {
  modules: [
    `${appPath}`,
    `${appPath}/js`,
    'node_modules'
  ],

  alias: {
    style: `${stylePath}/`,
    fonts: `${mediaPath}/fonts/`,
    images: `${mediaPath}/images/`
  },

  extensions: [ '*', '.js' ]
};

export const module = {
  rules: [
    // es6 loader
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    },

    // fonts loader
    {
      test: /\.(eot|otf|woff|woff2|ttf)$/,
      loader: 'url-loader?name=fonts/[hash].[ext]&limit=1'
    },

    // image loader
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'url-loader?name=images/[hash].[ext]&limit=10000'
    },

    // style *.sass loader
    {
      test: /\.sass|.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          // Mininize css
          minimize: true,
          // Give chance to make module
          modules: true,
          // Unique style name
          localIdentName: '[hash:8]__[name]-[local]'
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [
            autoprefixer({
              browsers: ['last 4 version']
            })
          ]
        }
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      }]
    }
  ]
};
