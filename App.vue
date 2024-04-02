<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>

<script setup>
const appConfig = useAppConfig()

const route = useRoute()
const {t} = useI18n()

const locale = computed(() => {
  if (route.fullPath.includes('ru')) return 'ru'
  return 'kz'
})

watch(() => locale.value, () => {
  setHead()
})

const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: ['foo']
  }
})


const setHead = () => {
  useHead({
    ...appConfig,
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs.lang
    },
    link: [...(i18nHead.value.link || [])],
    title:  t('head.title'),
    meta: [
      ...(i18nHead.value.meta),
      {
        hid: 'description',
        name: 'description',
        content: t('head.description')
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: t('head.keywords')
      },
      { property: 'og:title', content: `Testhub - ${t('head.title')}` },
      { property: 'og:description', content: t('head.description') },
      { property: 'og:image', content: '/og-image.jpg' }
    ],
  });
}

setHead()

</script>
