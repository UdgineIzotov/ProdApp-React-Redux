/**
 * Created by Evhenii_Izotov on 1/24/2018.
 */
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
        ]
    }
}