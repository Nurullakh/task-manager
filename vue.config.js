const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/task-manager",
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/styles/colors.scss";',
      },
    },
  },
});
