var debug = true;
var webpack = require('webpack');
var path = require('path');

var projects = require('./src/js/projects');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/app.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(jpe?g|gif|png)$/,
                loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "app.min.js",
    },
    plugins: debug ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};