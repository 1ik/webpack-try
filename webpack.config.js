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
            {test: /\.json$/, loader: 'json-loader'}
        ]
    }
};