const path = require('path');

module.exports = {
  entry: {
    bundle: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          'babel-loader'
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules/')
        ]
      }
    ]
  }
};