const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');

const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',   // production
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
    },
    output: {
        filename: 'main.js'
    }
});

module.exports = webpackConfig;
