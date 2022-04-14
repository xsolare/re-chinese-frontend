import { defineNuxtPlugin } from "#app"
import axios from "axios"

import { WordApi } from "./word"
import { UserApi } from "./user"
import { HieroglyphApi } from "./hieroglyph"
import { PinyinApi } from "./pinyin"

export type ApiReturnType = {
  word: ReturnType<typeof WordApi>
  user: ReturnType<typeof UserApi>
  hieroglyph: ReturnType<typeof HieroglyphApi>
  pinyin: ReturnType<typeof PinyinApi>
}

export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie("token")

  const api = (): ApiReturnType => {
    const instance = axios.create({
      baseURL: (useRuntimeConfig().API_URL || "") + "/api",
      // headers: {
      // Cookie: 'session-csl=' + useCookie('session-csl').value,
      // },
      withCredentials: true,
    })

    const apis = {
      word: WordApi,
      user: UserApi,
      hieroglyph: HieroglyphApi,
      pinyin: PinyinApi,
    }

    const result = Object.entries(apis).reduce((prev, [key, f]) => {
      return {
        ...prev,
        [key]: f(instance),
      }
    }, {} as ApiReturnType)

    return result
  }

  return {
    provide: {
      api,
    },
  }
})
