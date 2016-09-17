module.exports = {
    entry: "./src/app.ts",
    output: {
        path: './dist',
        filename: "bundle.js"
    },
    resolve: {
        extentions: ['.ts', ''],
        moduleDirectories: ['node_modules']
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};