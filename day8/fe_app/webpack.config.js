const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.join(__dirname, 'dist');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: dist,
        filename: 'main.[hash].js'
    },
    resolve: {
        extensions:['.js', '.png', '.css']
    },
    module: {
        rules: [
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            path: dist,
            template: './src/index.html'
        })
    ]
}