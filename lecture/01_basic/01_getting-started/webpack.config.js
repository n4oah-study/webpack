/*
 * webpack 명령어를 치면 자동으로 webpack.config.js를 찾아 세팅을 하고, 번들링을 시작함.
 */

let path = require('path')

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
