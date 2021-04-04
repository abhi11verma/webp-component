const path = require('path');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  output: {
    filename: 'index.js',
    publicPath: "",
    path: path.resolve(__dirname, 'dist/'),
    libraryTarget: 'umd'
  },
  // plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.scss$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'],
      //   include: path.resolve(__dirname, './src')
      // }
    ]
  },
}