const merge = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const baseConfig = require('./webpack.config.base')

const config = merge(baseConfig, {
    plugins: [
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"', // 如果说你想要里面是一个字符串 则要在里面使用 双引号
                BASE_URL: '"/"'
            }
                
        })
    ],

    mode: 'production',

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
//                 NODE_ENV: '"production"', // 如果说你想要里面是一个字符串 则要在里面使用 双引号
//                 BASE_URL: '"/"'
//             }

//         }) 
//     ],

//     mode: 'production'
// }
