import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../webpack.config.babel.js';
import path from 'path';

const compiler = new Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
	hot: true,
	contentBase: path.resolve(__dirname, '../dist'),
	watchOptions: {
		poll: true
	}
});

server.listen(8080, "127.0.0.1", () => {
	console.log("Starting server on http://localhost:8080");
});