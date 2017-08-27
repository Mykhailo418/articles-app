'use strict';

const webpack = require('webpack');
const DEV_ENV = true;

module.exports = {
	entry: {
		home1: './home1/js/app.js'
	},
	output: {
		path: __dirname + '/src/comp',
		filename: "[name].js",
		library: "[name]"
	},

	watch: true,

	devtool: "cheap-inline-source-map",

	plugins: [
		new webpack.DefinePlugin({
			DEV_ENV : DEV_ENV
 		}),
 	],

 	devServer: {
 		proxy: [{
 			path: '/api/',
 			target: 'http://localhost:3001'
 		}]
 	},

	module : {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: [/node_modules/],
		},
		{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader',
			exclude: [/node_modules/],
		},
		{
			test: /\.css$/,
			loader: 'style-loader!css-loader',
		}
		]
	}
}
