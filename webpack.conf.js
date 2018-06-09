const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

function assetsPath (_path) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
}

module.exports = {
    // If mode is "production", the app is optimized.
    // If mode is "development", javascript files output with adding source map.
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src/main.js') // The main javascript file
    },
    optimization: { // optimization chunks (Referecne: https://qiita.com/soarflat/items/1b5aa7163c087a91877d)
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial', // initial, async, all
                    enforce: true
                }
            }
        },
        minimizer: [
            // new UglifyJSPlugin({
            //     uglifyOptions: {
            //         compress: {
            //             drop_console: true
            //         }
            //     }
            // })
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // === Compile `index.pug` === //
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.pug'),
            minify: {
                html5: true,
                minifyCSS: true,
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true
            },
            inject: true,
            chunksSortMode: 'dependency',
            // serviceWorkerLoader: `<script>${fs.readFileSync(path.resolve(__dirname, 'src/service-worker-conf.js'), 'utf-8')}</script>`
        }),
        new HardSourceWebpackPlugin(),
        new ExtractTextPlugin('[name].css', {
            allChunks: true // TODO: You divide js files, you must add this code.
        }),
        // new webpack.HotModuleReplacementPlugin(),
    ],
    // Output config
    output: {
        path: path.resolve(__dirname, 'dist'), //  Output directory name
        filename: '[name].js' // Output filename
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    hotReload: false // disables Hot Reload
                }
            },
            {
                test: /(\.css$)/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.pug$/,
                oneOf: [
                    // this applies to `<template lang="pug">` in Vue components
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']
                    },
                    // this applies to pug imports inside JavaScript
                    {
                        use: ['raw-loader', 'pug-plain-loader']
                    }
                ]
            },
            {
                test: /\.styl$/,
                loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src/')
        }
    },
    // local server config
    devServer : {
        port            : 7777,                         // port number
        progress        : true,                         // Show progress on console.
        inline          : true,                         // The mode of inline.
        clientLogLevel  : 'info',                       // The log level(none, error, warning, info)
        contentBase     : path.join(__dirname, '/dist/'),    // Document root on server
        publicPath      : '/dist/',                     // Temporary path on virtual memory
        hot             : true,                         // use HMR
        watchOptions    : {
            poll            : true                      // ファイルの更新が正しく検知されない場合に利用
        },
    },
    devtool: 'inline-source-map',
};