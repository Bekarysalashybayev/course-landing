import kk from '../locales/kk.json'
import ru from '../locales/ru.json'

export default defineI18nConfig(() => ({
    legacy: true,
    fallbackLocale: 'ru',
    messages: {
        kz: kk,
        ru: ru
    }
}))
