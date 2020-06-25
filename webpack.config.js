const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        login: './src/loginApp.tsx',
        logout: './src/logoutApp.tsx',
        user: './src/userApp.tsx'
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['.build']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: 'index.html',
            chunks: ['login']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: 'logout.html',
            chunks: ['logout']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: 'user.html',
            chunks: ['user']
        }),
    ],
    output: {
        path: __dirname + '/.build',
        filename: '[name].bundle.js',
        publicPath: "/"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
        ]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.(png|jpe?g|gif|svg)$/i, loader: 'file-loader'},
            { test: /\.css/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.scss/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    optimization: {
        minimize: false
    },
};
