const express = require("express");
const app = express();
const compression = require('compression')
const port = 5000

// set webpackCompiler with client config 
const webpack = require('webpack');
const webpackConfig = require('./config/webpack.client');
const webpackCompiler = webpack(webpackConfig);

// compose devMiddleware with webpackCompiler
const webpackDevMiddleware = require("webpack-dev-middleware")(webpackCompiler, {
    noInfo: true, 
    hot: true,
    filename: "main.js", 
    stats: {
      colors: true
    },
    historyApiFallback: true
    // publicPath: webpackConfig.output.publicPath
})

// compose hotMiddleware with webpackCompiler
const webpackHotMiddleware = require("webpack-hot-middleware")(webpackCompiler, { 
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000
})

// set HMR middleware 
app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware)

// Run static server
app.use(compression())
app.use(express.static("./dist"));
app.listen(port, () =>  { 
    console.log(`listen on ${port}`)
});