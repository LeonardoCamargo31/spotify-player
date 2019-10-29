const path = require('path');

const config = {
  // O diretório base, para resolver pontos de entrada e carregadores da configuração.
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // responsável por erguer nosso server
  devServer: {
    contentBase: path.resolve(__dirname, './example'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
