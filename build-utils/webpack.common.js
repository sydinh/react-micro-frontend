const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (micro) {
    return {
        entry: micro ? `./src/${micro}/standalone.js` : './src/index.js',

        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
            ],
        },

        resolve: {
            extensions: ['*', '.js'],
        },

        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'React Micro Frontend',
                template: './public/index.html',
            }),
        ],

        output: {
            path: path.resolve(__dirname, '../', 'build'),
            publicPath: '/',
            filename: 'bundle.js',
        },
    };
};
