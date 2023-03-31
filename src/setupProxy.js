const { createProxyMiddleware } = require("http-proxy-middleware");


module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.ENV == 'production' ? `https://backend.trendcarts.net/v1` : `http://${process.env.HOST}:${process.env.PORT}/v1`,
      pathRewrite: { "^/api": "" },
      changeOrigin: process.env.ENV == 'production' ? true : false,
    })
  );
};