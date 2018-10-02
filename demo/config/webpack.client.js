const path = require("path");
const webpack = require("webpack")
// html template 

const HtmlWebpackPlugin= require("html-webpack-plugin"); 
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ 
	template: path.resolve(__dirname, "..", "src", "index.html"), 
	filename:"index.html", 
  inject: true,
  minify: {
    collapseWhitespace: true
}
})

// minify text files 

const TerserPlugin = require('terser-webpack-plugin');


// hot middleware settings 

const HMR_Entry = "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000"

// bundle weight map

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// set NODE_ENV to production

const NODE_ENV_SETTING = new webpack.DefinePlugin({
  'process.env.NODE_ENV': "'development'"
})



//  ____   ____      
// |___     ___|
//    |  |  |
//    |  |  |
//  __|  |  |__
// |____   ____|     


// CONFIG 

module.exports= { 

  // mount_points
  context: path.resolve(__dirname, ".."),
  entry:[HMR_Entry, "./src"],
  output:{ 	
		path: path.resolve(__dirname, "..", "./dist"), 
		filename:"main.js"
  }, 

  // environment  
  mode:"development",
  target: "web",
  // watch: true,
  // watchOptions: { 
  //   aggregateTimeout: 500,    
  // },

  devtool: "eval-source-map",
  // modules process
	module: { 
		rules: [ 

      // script 

      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: "babel-loader"
        } 
      },

      // styles 

			{
        test: /\.css$/,
        exclude: path.resolve(__dirname, "node_modules"),
				use:["style-loader","css-loader"]
      },
      
      // images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '90-100'
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      }
		]
  },

  // additional process  
  plugins: [
    HtmlWebpackPluginConfig,  
    // BundleAnalyzerPlugin,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),  
    NODE_ENV_SETTING
  ],

  optimization:{ 
    runtimeChunk:{ 
      name:"runtime"
    },
    
      minimizer: [new TerserPlugin()]
    
  }
  
}
