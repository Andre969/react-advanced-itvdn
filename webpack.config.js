const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputPath = path.resolve(__dirname, './dist')


const webpackConfig = {
	entry: {
		app: [
			'./src/index.js'
		]
	},
	output: {
		path: outputPath,
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(png|gif|jpg|svg)$/,
				include: path.resolve(__dirname, './src/assets'),
				use: 'url-loader?limit=50000&name=assets/[name]-[hash].[ext]'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/assets/index.html'),
			path: outputPath,
			filename: 'index.html',
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		port: 8080,
		inline: true,
		hot: true,
		host: '0.0.0.0',
	}
}

module.exports = webpackConfig