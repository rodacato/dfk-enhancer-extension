const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const OUTPUT_FOLDER = './dist'
const isProduction = process.env.NODE_ENV === 'production'
const isDevelopment = !isProduction

const contentScripts = {
  content: './app/content/index.js',
}
const extensionPages = {
  options: './app/options/index.js',
  popup: './app/popup/index.js',
}

let config = {
  mode: process.env.NODE_ENV,
  context: __dirname + '/src',
}

module.exports = Object.assign({}, config, {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    background: './app/background/index.js',
    ...contentScripts,
    ...extensionPages,
  },
  devtool: isDevelopment && 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, OUTPUT_FOLDER),
    filename: 'assets/js/[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
      {
        test: /\.?jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CopyPlugin({
      patterns: [
        {
          from: 'manifest.json',
          to: path.join(__dirname, OUTPUT_FOLDER),
          force: true,
          transform: function (content, path) {
            return Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString()),
              })
            )
          },
        },
        {
          from: 'assets/**/*',
          to: path.join(__dirname, OUTPUT_FOLDER),
          force: true,
        },
      ],
    }),
  ].filter(Boolean),
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
          warnings: false,
        },
      }),
    ],
  },
  infrastructureLogging: {
    level: 'info',
  },
})
