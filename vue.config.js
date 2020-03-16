module.exports = {
  lintOnSave: true,
  // lineOnSave: false,
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://192.168.3.150:8888",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
