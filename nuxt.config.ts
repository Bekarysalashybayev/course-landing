// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 5001
  },
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', "~/assets/scss/base.scss"],

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "@/assets/scss/base.scss" as *;'
  //       }
  //     }
  //   }
  // }
})
