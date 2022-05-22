const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// local variables
const isProduction = process.env.NODE_ENV === 'PRODUCTION';

let env = isProduction ? 'production' : 'development';
let outputPath = isProduction ? './build/' : './dist/';

let baseWebpack = {
  mode: env,
  entry: {
    'public/app': path.resolve(__dirname, 'src/app.ts') // The main javascript file
  },
  optimization: {
    // optimization chunks (Referecne: https://qiita.com/soarflat/items/1b5aa7163c087a91877d)
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'public/vendor',
          chunks: 'initial' // initial, async, all
        }
      }
    },
    minimizer: []
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        html5: true,
        minifyCSS: true,
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true
      },
      inject: true,
      chunksSortMode: 'auto'
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.(woff2?|woff|ttf|otf)$/.test(entry)) return 'font';
        if (/\.(png|jpe?g|gif)$/.test(entry)) return 'image';
        return 'script';
      },
      include: 'allAssets', // or 'initial', 'allChunks'
      fileBlacklist: [/\.(eot|svg)/]
    }),
    new CopywebpackPlugin({
      patterns: [
        {
          toType: 'dir',
          from: path.join(__dirname, 'src/assets/images'),
          to: path.join(__dirname, `${outputPath}public/static/images`)
        }
      ]
    })
  ],
  // Output config
  output: {
    path: path.resolve(__dirname, outputPath), //  Output directory name
    filename: '[name].js', // Output filename
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true, // コンパイルのみで型検査しない
          appendTsSuffixTo: [/\.vue/] // /vueをtypescriptとして扱う
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s(c|a)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProduction,
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true // optional
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: 'public/media',
          publicPath: '/public/media/'
        }
      },
      {
        test: /\.(woff2?|woff|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: 'public/fonts',
          publicPath: '/public/fonts/'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.ts', '.json'],
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      vue: '@vue/runtime-dom'
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true, // Enable gzip compression for everything served:
    host: '0.0.0.0',
    port: 7777, // port number
    static: {
      directory: path.join(__dirname, 'dist/') // Document root on server
    },
    client: {
      progress: false, // Show progress on console.
      overlay: true, // show error when there are compiler errors or warnings.
      logging: 'info' // A log level(none, error, warning, info)
    },
    historyApiFallback: true
  }
};

module.exports = baseWebpack;
