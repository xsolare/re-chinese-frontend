import { api } from "#/utils/api"

import { IUserJwt } from "#/utils/api/user"

export default defineNuxtPlugin(async (nuxtApp) => {
  const env = useRuntimeConfig()

  let data: IUserJwt = {} as IUserJwt
  let isAuthed: boolean = false

  const auth = async (jwt?: string) => {
    if (jwt) useCookie(env.JWT_HEADER).value = jwt

    try {
      data = await api().user.auth()
      isAuthed = true

      return data
    } catch (err) {
      console.log("err", err)
    }
  }

  //? Auto auth
  // auth()

  return {
    provide: {
      auth: {
        ...data,
        isAuthed,
        auth,
      },
    },
  }
})
