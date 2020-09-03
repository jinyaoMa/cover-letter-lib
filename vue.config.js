module.exports = {

  publicPath: process.env.NODE_ENV === 'production' ? '/cover-letter-lib/' : '/',

  productionSourceMap: false,

  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/i)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  }
}