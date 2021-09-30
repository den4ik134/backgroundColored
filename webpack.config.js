const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const DevMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './docs'),
        filename: 'index.js',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: false,
        open: true,
        liveReload: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            cache: true,
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};