const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            /*
             * 모든 css 를 찾아서, css-loader로 css를 js로 만든 뒤 style-loader로 html에 style 태그를 생성 함.
             */
            test: /\.css$/,
            //use: ['style-loader', 'css-loader']
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
}
