const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'none', // remove eval stuff 
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        // path takes an absolute path and path.resolve generates and absolute path for us
        path: path.resolve(__dirname, 'dist')
    },
    // loaders are the key for webpack to handle many different type of files besides javascript
    module: {
        rules: [
            {
                test: /\.scss$/i, // regex - the file ends with .css
                // css-loader loader takes css and turns it into a valid javascript code
                // style loader will take that css and inject it into the dom - transform the jscss to regular css
                
                // we can't just change .css to .scss and expect it to work, we have to use another loader
                
                // the order of execution is from right to left
                use: [
                    'style-loader', // 3. Inject styles into DOM
                    'css-loader', // 2. Truns css into common js
                    'sass-loader' // 1. Turns sass into css
                ],
            }
            // the sass-loader will take sass/scss and turns it into css,
            // then that css gets turned into js by css-loader and bundled up into usable css by style-loader
        ]
    }
}