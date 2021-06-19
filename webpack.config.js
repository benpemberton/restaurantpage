const path = require('path');

module.exports = {
  mode: 'development',  
  entry: {
      index: './src/index.js',
      initial: './src/initial.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};