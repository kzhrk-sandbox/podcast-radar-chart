import webpack from 'webpack';
import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';


export default {
	entry: {
		index: './src/webpack/index.js'
	},

	output: {
		path: path.resolve(__dirname, './public/js'),
		filename: '[name].js'
	},

	resolve: {
		extensions: ['.js']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
        exclude: /node_modules/,
				use: [{
					loader: "babel-loader"
				}]
			},
			{
				test: /\.vue$/,
        exclude: /node_modules/,
				use: [{
					loader: "vue-loader"
				}]
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
	]
}