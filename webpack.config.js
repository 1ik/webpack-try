var webpack = require('webpack');

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: './dist',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx', '.json']
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.ts$/, loader: 'ts-loader'},
            { test: /\.json$/, loader: 'json-loader'},
            {
                test: /jquery\.min\.js$/, 
                loader: 'expose?jQuery'
            },
            {
                test: /jquery\.min\.js$/, 
                loader: 'expose?$'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        })
    ]
};