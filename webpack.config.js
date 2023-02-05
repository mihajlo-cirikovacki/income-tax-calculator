const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
		assetModuleFilename: '[name][ext]',
		publicPath: '/',
	},
	target: 'web',
	devServer: {
		port: '5000',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'@/components': path.resolve(__dirname, 'src/components/'),
			'@/constants': path.resolve(__dirname, 'src/constants/'),
			'@/context': path.resolve(__dirname, 'src/context/'),
			'@/features': path.resolve(__dirname, 'src/features/'),
			'@/hooks': path.resolve(__dirname, 'src/hooks/'),
			'@/providers': path.resolve(__dirname, 'src/providers/'),
			'@/routes': path.resolve(__dirname, 'src/routes/'),
			'@/utils': path.resolve(__dirname, 'src/utils/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
};
