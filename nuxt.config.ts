// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve, dirname} from 'node:path'
import {fileURLToPath} from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
    devtools: {enabled: false},
    css: ['~/assets/css/main.css', "~/assets/scss/base.scss"],
    modules: [
        'nuxt-lazy-load',
        '@nuxtjs/i18n',
        'nuxt-gtag'
    ],
    gtag: {
        id: 'G-PBHW7Z3JD5'
    },
    i18n: {
        locales: ['kz', 'ru'],
        defaultLocale: 'kz',
        vueI18n: './service/i18n.config.ts',
    },
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
    build: {
        transpile: ['vue-i18n']
    },
    vite: {
        build: {
            sourcemap: true,
        },
        plugins: [
            VueI18nVitePlugin({
                include: [
                    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
                ]
            })
        ]
        // css: {
        //   preprocessorOptions: {
        //     scss: {
        //       additionalData: '@use "@/assets/scss/base.scss" as *;'
        //     }
        //   }
        // }
    }
})
