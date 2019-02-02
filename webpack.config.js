const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.ENV === "prod";

console.log("=================");
console.log(`${isProd ? "Production" : "Development"} build!`);
console.log("=================");

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
        {
            test: /\.(ogg|png|html|txt)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[ext]"
                    }
                }
            ]
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: "/node_modules/"
        },
	{
            test: /\.css$/,
	    use: [
	      MiniCssExtractPlugin.loader,
	      'css-loader',
	      'postcss-loader'
	    ]
	}
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx", ".css"],
  },
  performance: {
    hints: "warning",
    maxAssetSize: isProd ? 800000 : 20000000,
    maxEntrypointSize: isProd ? 800000 : 40000000,
  },
  devtool: "inline-source-map",
  target: "web",
  devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 8080,
      hot: false,   
      watchOptions: {
      }
  },
  stats: "normal"
}
