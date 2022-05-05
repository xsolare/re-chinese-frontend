import get from "lodash-es/get"
import * as en from "../locales/en.json"
import * as ru from "../locales/ru.json"

// TODO Get and save location
export default defineNuxtPlugin((nuxtApp) => {
  const messages = { en, ru }
  const i18n = {
    locale: useState("i18n:locale", () => "ru"),
    t: (path: string, params?: any) => {
      const result = get(messages, `${i18n.locale.value}.${path}`)

      return result
    },
  }

  return {
    provide: {
      loc: i18n.locale,
      t: i18n.t,
    },
  }
})
