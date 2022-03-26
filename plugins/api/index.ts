import { defineNuxtPlugin } from '#app'
import axios from 'axios'

import { WordsApi } from './words'
import { UserApi } from './user'

export type ApiReturnType = {
  words: ReturnType<typeof WordsApi>
  user: ReturnType<typeof UserApi>
}

export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie('token')

  const api = (): ApiReturnType => {
    const instance = axios.create({
      baseURL: useRuntimeConfig().API_URL || '',
      // headers: {
      // Cookie: 'session-csl=' + useCookie('session-csl').value,
      // },
      withCredentials: true,
    })

    const apis = {
      words: WordsApi,
      user: UserApi,
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
