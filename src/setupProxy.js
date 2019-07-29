const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy(
            '/v1', {
                target: 'http://m.mi.com',
                changeOrigin: true,
                headers: {
                    Referer: 'https://m.mi.com/'
                }
            }));

};