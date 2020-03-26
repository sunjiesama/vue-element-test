module.exports = {
  lintOnSave: true,
  // lineOnSave: false,
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost/code/vueElementTest/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
