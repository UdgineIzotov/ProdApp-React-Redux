/**
 * Created by Evhenii_Izotov on 1/24/2018.
 */
const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');



const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  plugins: ['transform-decorators-legacy']
              }},
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
            { test: /\.(jpe?g|png|svg|eot|ttf|woff)$/,
                use: [{  loader: 'url-loader',
                    options: {
                        // limit: 10000,
                        name: 'images/[name].[ext]'
                    }
                }]
            },
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        HtmlWebpackPluginConfig,
        new CopyWebpackPlugin([
            'src/assets/images',
            {from: 'src/assets/fonts', to: 'fonts/'}
        ]),
    ],
    devServer: {
        contentBase: '/',
        port: 8080,
        historyApiFallback: true,
    },

}