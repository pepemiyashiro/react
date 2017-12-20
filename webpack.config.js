const path = require('path');

const config = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true, // Boolean
    contentBase: path.resolve(__dirname, 'src'),
    port: 3333
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader' 
      }
    ]
  }
};

module.exports = config;