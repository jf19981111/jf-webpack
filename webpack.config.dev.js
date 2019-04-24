const merge = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const baseConfig = require('./webpack.config.base')

const config = merge(baseConfig, {
    plugins: [
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"', // 如果说你想要里面是一个字符串 则要在里面使用 双引号
                BASE_URL: '"/"'
            }
                
        })
    ],

    mode: 'development',

    devServer: {
        contentBase: './abc', // 配置默认文件的根路径是什么(也就是说告诉 webpack 你要把我的哪个文件看成是 www 的文件)  默认是 ./
        port: 9090,
        open: true
    }
})

console.log(config)

module.exports = config















// // 配置文件

// const path = require('path')

// // 引入 插件
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const { ProgressPlugin, DefinePlugin } = require('webpack')

// module.exports = {
//     entry: {
//         app: './src/main.js'
//     },

//     output: {
//         path: path.resolve(__dirname,'./dist'),
//         filename: '[name].[hash].js' // 要打包生成的文件名字
//     },

//     module: {
//         rules: [
//             { 
//                 test: /\.less$/, 
//                 use: [
//                     'style-loader',
//                     'css-loader',
//                     'less-loader'
//                 ] 
//             }
//         ]
//     },

//     plugins: [
//         new CopyWebpackPlugin([
//             { from: path.resolve(__dirname, './public'), to: path.resolve(__dirname, './dist') }
//         ]),

//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, './public/index.html')
//         }),

//         new CleanWebpackPlugin(),

//         new ProgressPlugin(),

//         new DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"development"', // 如果说你想要里面是一个字符串 则要在里面使用 双引号
//                 BASE_URL: '"/"'
//             }

//         }) 
//     ],

//     mode: 'development',

//     devServer: {
//         contentBase: './abc', // 配置默认文件的根路径是什么(也就是说告诉 webpack 你要把我的哪个文件看成是 www 的文件)  默认是 ./
//         port: 9090,
//         open: true
//     }
// }
