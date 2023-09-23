import kk from '../locales/kk.json'
import ru from '../locales/ru.json'

export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: 'kz',
    messages: {
        kz: kk,
        ru: ru
    }
}))
