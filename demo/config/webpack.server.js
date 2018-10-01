const webpack = require("webpack");
const path = require("path")

const nodeExternals = require("webpack-node-externals")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports= { 

    // mount_point
   
    context: path.resolve(__dirname,"..","server"),
    entry:"./http.js",
    output: { 
        path: path.resolve(__dirname,".."),
        filename:"server.js"
    },

    // environment

    mode:"production",
    target:"node",
    externals: [nodeExternals()],
    // watch: true,
    watchOptions: { 
        aggregateTimeout: 500,
    },
    

    // additionals process

    plugins: [ 
        new webpack.DefinePlugin({ 
            "process.env.BROWSER": false
        })
    ]
}