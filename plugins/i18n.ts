import get from "lodash-es/get"
import * as en from "../locales/en.json"
import * as ru from "../locales/ru.json"

// TODO Get and save location
export default defineNuxtPlugin((nuxtApp) => {
  const messages = { en, ru }
  const i18n = {
    locale: useState("i18n:locale", () => useCookie("i18n:locale")?.value || "ru"),
    t: (path: string, params?: any) => {
      const result = get(messages, `${i18n.locale.value}.${path}`)

      return result
    },
  }

  const changeLocale = (locale: "en" | "ru") => {
    i18n.locale.value = locale
    useCookie("i18n:locale").value = locale
  }

  return {
    provide: {
      cLoc: changeLocale,
      loc: i18n.locale,
      t: i18n.t,
    },
  }
})
