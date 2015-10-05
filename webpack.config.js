var path = require('path');

module.exports = {
    entry: [
        './client'
    ],
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!raw!sass'
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [],
    devtool: ''
};