module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: (tag) => tag.startsWith("vue-weather-widget"),
        },
      }));
  },
  transpileDependencies: [],
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-weather-widget/" : "/",
};
