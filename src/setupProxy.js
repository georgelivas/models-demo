const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.themoviedb.org/3/movie/popular?api_key=69b3046a345dd4b37042ca5777fc2637&language=en-US&page=1',
            changeOrigin: true,
        })
    );
};
