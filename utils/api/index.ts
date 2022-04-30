import axios from "axios"

import { WordApi } from "./word"
import { UserApi } from "./user"
import { HieroglyphApi } from "./hieroglyph"
import { PinyinApi } from "./pinyin"

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>
  word: ReturnType<typeof WordApi>
  hieroglyph: ReturnType<typeof HieroglyphApi>
  pinyin: ReturnType<typeof PinyinApi>
}

export const api = (): ApiReturnType => {
  const env = useRuntimeConfig()

  const instance = axios.create({
    baseURL: (env.API_URL || "") + "/api",
    headers: {
      [env.JWT_HEADER]: useCookie(env.JWT_HEADER)?.value || "",
    },
    // withCredentials: true,
  })
  const apis = {
    user: UserApi,
    word: WordApi,
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
