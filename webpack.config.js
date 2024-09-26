const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/www/main.js',  // Entry point adjusted to your main.js location
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Output to 'dist' directory
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/www/index.html',  // Template adjusted to your index.html location
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'img', to: 'img' },                   // Copy images
        { from: 'rust-wasm/pkg', to: 'pkg' },         // Copy WASM pkg from rust-wasm/pkg
        { from: 'src/www/pages', to: 'pages' },       // Copy additional HTML pages
        { from: 'src/www/partials', to: 'partials' }, // Copy partials if needed
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  experiments: {
    asyncWebAssembly: true,
  },
};
