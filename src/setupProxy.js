const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: 'https://backend.trendcarts.net/v1',
      pathRewrite: { "^/api": "" },
    })
  );
};


// const { createProxyMiddleware } = require("http-proxy-middleware");



// //work here to properly have workstation and production

// module.exports = function (app) {
//   app.use(
//     "/api",
//     createProxyMiddleware({
//       target: `https://backend.trendcarts.net/v1`,
//       // target: process.env.ENV == 'production' ? `https://backend.trendcarts.net/v1` : `http://${process.env.HOST}:${process.env.PORT}/v1`,
//       pathRewrite: { "^/api": "" },
//       changeOrigin:false
//       // changeOrigin: process.env.ENV == 'production' ? true : false,
//     })
//   );
// };