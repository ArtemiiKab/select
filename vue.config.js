module.exports = {
  publicPath: 'select',
  
   css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/main.scss";',
      },
    },
  },
}
