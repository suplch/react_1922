const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { VueLoaderPlugin } = require('vue-loader');

const merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',   // production
    output: {
        filename: 'main.[hash].js'
    }
});

module.exports = webpackConfig;
