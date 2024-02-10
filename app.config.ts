export default defineAppConfig({
    htmlAttrs: {
        lang: 'en',
    },
    meta: [
        {
            name: 'robots',
            content: 'index, follow'
        },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.ico'
        },
        {
            rel: 'preload',
            as: 'image',
            href: '/title-line.svg'
        },
    ],
})
