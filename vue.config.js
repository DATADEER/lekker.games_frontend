module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    proxy: {
      "^/api": {
        pathRewrite: { "^/api": "" },
        target: "http://localhost:4000",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
