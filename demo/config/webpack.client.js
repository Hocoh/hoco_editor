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

// jquery setting 

const JQueryPluginConfig = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery"
})

// minify text files 

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


// bundle weight map

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// set NODE_ENV to production

const NODE_ENV_SETTING = new webpack.DefinePlugin({
  'process.env.NODE_ENV': "production"
})


//  ___________
// |___     ___|
//    |  |  |
//    |  |  |
//  __|  |  |__
// |___________|


// CONFIG 

module.exports= { 

  // mount_points
  context: path.resolve(__dirname, ".."),
  entry:"./src",
  output:{ 	
		path: path.resolve(__dirname, "..", "./dist"), 
		filename:"main.js"
  }, 

  // environment
  mode: "production", 
  target: "web",
  watch: true,
  watchOptions: { 
    aggregateTimeout: 500,    
  },
  devtool: false,

  // modules process
	module: { 
		rules: [ 

      // styles 

			{
				test: /\.css$/,
				use:["style-loader","css-loader"]
      },
      
      // images
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
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
    JQueryPluginConfig,
    // BundleAnalyzerPlugin,
    NODE_ENV_SETTING
  ],

  optimization:{ 
    runtimeChunk:{ 
      name:"runtime"
    },
    
      minimizer: [new UglifyJsPlugin()]
    
  }
  
}
