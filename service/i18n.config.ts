import kk from '../locales/kk.json'
import ru from '../locales/ru.json'

export default defineI18nConfig(() => ({
    legacy: true,
    fallbackLocale: 'kz',
    messages: {
        kz: kk,
        ru: ru
    }
}))
