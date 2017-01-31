const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')
const webpack = require('webpack')
const postcss = require('postcss')
const smartImport = require('postcss-smart-import')
const apply = require('postcss-apply')
const customMedia = require('postcss-custom-media')
const precss = require('precss')
const nested = require('postcss-nested')
const comments = require('postcss-discard-comments')


const extractCommons = new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    filename: 'commons.js'
})

module.exports = function(env) {
    return {
        devtool: 'source-map',
        entry: './src/resources/js/app.js',
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(jpe?g|gif|png|svg)$/i,
                    use: 'file-loader?name=/image/[name].[ext]'
                },
                {
                    test: /\.pcss$/,
                    exclude: /node_modules/,
                    loaders: ExtractTextPlugin.extract([
                        {
                            loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                        { loader: 'resolve-url-loader?sourceMap'},
                        {
                            loader: 'postcss-loader?sourceMap',
                            options: {
                                sourceMap: true,
                            }
                         },
                    ])
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'bundle.css',
                // disable:false,
                // allChunks: true
            }),
            extractCommons
        ],
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: path.join(__dirname),
            watchContentBase: true,
            publicPath: '/dist/'
        }
        }
}