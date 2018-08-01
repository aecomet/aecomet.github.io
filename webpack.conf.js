const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

function assetsPath(_path) {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
}

const environment = (process.env.NODE_ENV === 'PRODUCTION') ? 'production' : 'development';
const watch = (process.env.NODE_ENV !== 'PRODUCTION');

let baseWebpack = {
    // If mode is "production", the app is optimized.
    // If mode is "development", javascript files output with adding source map.
    watch: watch,
    mode: environment,
    entry: {
        app: path.resolve(__dirname, 'src/main.ts'), // The main javascript file
        component: path.resolve(__dirname, 'src/components/index.ts'), // The main javascript file
        data: path.resolve(__dirname, 'src/static/data/index.ts') // The main javascript file
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
        minimizer: []
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
        }),
        // === Compile `404.pug` === //
        new HTMLWebpackPlugin({
            filename: '404.html',
            template: path.resolve(__dirname, 'src/404.pug'),
            minify: {
                html5: true,
                minifyCSS: true,
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true
            },
            inject: true,
            chunksSortMode: 'dependency',
            excludeChunks: ['app', 'vendor', 'data', 'component']
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true // TODO: You divide js files, you must add this code.
        }),
    ],
    // Output config
    output: {
        path: '', //  Output directory name
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
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
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
        extensions: ['.js', '.ts', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src/')
        }
    },
};

if (process.env.NODE_ENV === 'PRODUCTION') {
    baseWebpack.output.path = path.resolve(__dirname, './')
    baseWebpack.plugins = baseWebpack.plugins.concat([
        /* === Copy Static files === */
        new CopywebpackPlugin([ { toType: 'dir', from: path.join(__dirname, 'src/static/images'), to: path.join(__dirname, 'static/images') } ]),
        new CopywebpackPlugin([ { toType: 'file', from: path.join(__dirname, 'src/service-worker.js'), to: path.resolve(__dirname, 'service-worker.js') } ]),
        new CopywebpackPlugin([ { toType: 'file', from: path.join(__dirname, 'src/manifest.json'), to: path.resolve(__dirname, 'manifest.json') } ]),
        /* === Service Worker === */
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, 'src/service-worker.js'),
            filename: 'service-worker.js',
            include: [ '*.js', '*.css', '*.html', 'manifest.json', '**/*.png', '**/*.ico' ],
        }),
    ])
    baseWebpack.optimization.minimizer.push(
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: {
                    drop_console: true
                }
            }
        })
    )
} else {
    baseWebpack.output.path = path.resolve(__dirname, './dist')

    baseWebpack.plugins = baseWebpack.plugins.concat([
        new HardSourceWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        /* === Copy Static files === */
        new CopywebpackPlugin([ { toType: 'dir', from: path.join(__dirname, 'src/static/images'), to: path.join(__dirname, 'dist/static/images') } ]),
        new CopywebpackPlugin([ { toType: 'file', from: path.join(__dirname, 'src/service-worker.js'), to: path.join(__dirname, 'dist/service-worker.js') } ]),
        new CopywebpackPlugin([ { toType: 'file', from: path.join(__dirname, 'src/manifest.json'), to: path.resolve(__dirname, 'dist/manifest.json') } ]),
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, 'src/service-worker.js'),
            filename: 'service-worker.js',
            exclude: [ '**/.*', '**/*.hot-update.*', '**/*.map' ],
            include: [ '*.js', '*.css', '*.html', 'manifest.json', '**/*.png', '**/*.ico' ],
        }),
    ])
    baseWebpack['devtool'] = 'inline-source-map'
    // local server config
    baseWebpack['devServer'] = {
        host: '0.0.0.0',
        port: 7777,                         // port number
        contentBase: path.join(__dirname, 'dist/'),    // Document root on server
        // publicPath: path.join(__dirname, 'dist/'),                     // Temporary path on virtual memory
        progress: false,                         // Show progress on console.
        inline: true,                         // The mode of inline.
        hot: false,                         // use HMR
        clientLogLevel: 'info',                       // The log level(none, error, warning, info)
        historyApiFallback: false
    }
}

module.exports = baseWebpack
