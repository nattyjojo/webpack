const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
        new CleanWebpackPlugin()
    ],
    entry: {

        main: path.resolve(__dirname, './src/app.js'),
    },
    output: {

        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
        
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'deploy'),
        },
        open: true
    },
  
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          // css rule
          {
        
            test: /\.css$/,
            use: ["style-loader", "css-loader"]

          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          }
          
        ]
    },

};
