import path from 'path';
import webpack from 'webpack';

export default {
	entry: [
		'webpack/hot/dev-server',
		'./src/index.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: 'dist/'
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, './src')],
		extensions: ['.js', '.vue'],
		alias: {vue: 'vue/dist/vue.js'}
	},
	module: {
		rules: [{
			test: /\.vue$/,
			use: 'vue-loader'
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};
