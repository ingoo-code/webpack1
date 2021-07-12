const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    name:'ingoo',
    mode:'development', // production
    devtool:'eval', // hidden-source-map

    resolve:{
        extensions:['.js','.jsx']
    },
    // 입력받을 내용들
    entry:{
        app:['./index.jsx']
    },

    module:{
        rules:[{
            test:/\.jsx?$/,
            loader:'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['> 5% in KR','last 2 chrome versions']
                        },
                        debug:true,
                    }],
                    '@babel/preset-react'
                ],
                plugins:[
                    'react-refresh/babel'
                ]
            }
        },{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader']
        }]
    },

    plugins:[
        new webpackPlugin(),
        new webpack.LoaderOptionsPlugin({debug:true}),
        new MiniCssExtractPlugin({ filename:'app.css' })
    ],

    //내보낼 내용들
    output:{
        path:path.join(__dirname,'dist'), // 현재디렉토리 + dist까지
        filename:'app.js',
        publicPath:'/dist'
    },

    devServer:{
        publicPath:'/dist',
        hot:true,
        historyApiFallback:true // 새로고침시 해당 url이 없을경에도 그냥 무시하고 실행 
    }
}