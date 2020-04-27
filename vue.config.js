module.exports = {
  // publicPath for deploy on prod, should change it based on deployment
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // All webpack-dev-server are supported
  devServer: {
    port: 4396,
    host: '0.0.0.0',
    hot: true,
    overlay: true,
    openPage: '/',
    // new proxy tables as same as the past 'proxyTable'
    proxy: {
      '/api': {
        target: 'http://www.example.org',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
