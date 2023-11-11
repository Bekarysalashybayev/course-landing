export default defineAppConfig({
    title: "Testhub",
    htmlAttrs: {
        lang: 'en',
    },
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Education system.'
        },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg'
        },
        {
            rel: 'preload',
            as: 'image',
            href: '/title-line.svg'
        },
    ],
})
