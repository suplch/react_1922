const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const dist = path.join(__dirname, 'dist');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: dist,
        filename: 'main.[hash].js'
    },
    devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
    resolve: {
        extensions:['.js', '.png', '.css']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { 
                test: /\.js$/, 
                use: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/g,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/g,
                use: ['file-loader']
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            path: dist,
            template: './src/index.html'
        })
    ]
}