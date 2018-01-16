const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: {
        'index': PATHS.source + '/pages/index/index.js',
        'blog': PATHS.source + '/pages/blog/blog.js',
        // 'about': PATHS.source + '/pages/about/about.js',

    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.source + '/pages/index/index.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            template: PATHS.source + '/pages/blog/blog.pug',
        }),
        // new CleanWebpackPlugin('build'),
        new ExtractTextPlugin('./css/[name].css'),
        // new HtmlWebpackPlugin({
        //     title: 'Test',
        //     filename: 'test.html',
        //     template: './templates/index_template.html'
        // }),

    ],
    module: {
        rules:[
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    use: [
                    // 'style-loader',
                    'css-loader',
                    'sass-loader'
                    ]
                })
                },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                    'css-loader',
                    ]
                })
                }
        ]
    },
    devServer: {
        stats: 'errors-only'
    }
};