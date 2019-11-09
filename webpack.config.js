const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'none', // remove eval stuff 
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        // path takes an absolute path and path.resolve generates and absolute path for us
        path: path.resolve(__dirname, 'dist')
    }
}