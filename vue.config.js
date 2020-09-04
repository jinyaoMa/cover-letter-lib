module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/cover-letter-lib/" : "/",

  outputDir: "docs",

  productionSourceMap: false,

  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md$/i)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
    config.plugin("html").tap(args => {
      args[0].title = "Cover Letter Library";
      return args;
    });
  }
};
