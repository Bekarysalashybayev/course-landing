// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', "~/assets/scss/base.scss"],
  modules:[
    'nuxt-lazy-load'
  ],
  lazyLoad: {
    // These are the default values
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,

    // Default image must be in the public folder
    // @ts-ignore
    defaultImage: '/img-lazy-load.svg',

    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',

    observerConfig: {
      // See IntersectionObserver documentation
    }
  },
  nitro: {
    compressPublicAssets: true,
  },
  vite: {
    build: {
      sourcemap: true,
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "@/assets/scss/base.scss" as *;'
    //     }
    //   }
    // }
  }
})
