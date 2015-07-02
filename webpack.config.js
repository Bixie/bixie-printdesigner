var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: "./src/js/app.js",
    debug: true,
    output: {
        path: __dirname + "/public/js",
        publicPath: "public/",
        filename: "bundle.js"
    },
    resolve: {
        root: [path.join(__dirname, "vendor")]
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};
