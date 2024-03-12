<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>

<script setup>
const appConfig = useAppConfig()

const route = useRoute()

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
    title: locale.value === 'kz' ?
        'ҰБТ Пробный тест, Тегін пробный тест 2024, Жаңа формат, Қатемен жұмыс & Пәндік тест.'
        :
        'Пробный ЕНТ Тест, ЕНТ 2024, Новый формат, Предметный тест и Работа с ошибками.',
    meta: [
      ...(i18nHead.value.meta),
      {
        hid: 'description',
        name: 'description',
        content: locale.value === 'kz' ?
            'Онлайн пробный ҰБТ тест. Біздің сайт әртүрлі пәндер мен тақырыптар бойынша тесттер ұсынады. ҰБТ тегін пробный тест тапсырыныз. Апта сайын Рейтингтік тесттер.' :
            'Онлайн пробный ЕНТ тест. Наш сайт предоставляет широкий выбор тестов по различным предметам и темам. Сдавайте бесплатный онлайн тест перед реальным экзаменом.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: locale.value === 'kz' ?
            'байқау сынағы, тегін тесттер, ҰБТ 2024, онлайн тесттер, жаңа формат, тегін тесттер, қатемен жұмыс, пәндік тест, математика, физика, химия, информатика, биология, тарих, аққ.'
            :
            'пробные тесты, подготовка к экзаменам, онлайн ент, новый формат, предметный тест, работа с ошибками, тесты по математике, информатика, физика, химия, биология, история.'
      },
    ],
  });
}

setHead()

</script>
