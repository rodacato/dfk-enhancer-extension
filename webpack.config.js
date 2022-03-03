const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const OUTPUT_FOLDER = './dist'

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    content: path.join(__dirname, 'src', 'app', 'content.js'),
    background: path.join(__dirname, 'src', 'app', 'background.js'),
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, OUTPUT_FOLDER),
    filename: '[name].bundle.js',
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
        test: /\.?js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/manifest.json',
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
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/**/*',
          to: path.join(__dirname, OUTPUT_FOLDER),
          force: true,
        },
      ],
    }),
  ],
  infrastructureLogging: {
    level: 'info',
  },
}
