import { api } from "#/utils/api"

import { IUserJwt } from "#/utils/api/user"

export default defineNuxtPlugin(async (nuxtApp) => {
  let data: IUserJwt = {} as IUserJwt
  let isAuthed: boolean = false

  try {
    // data = await api().user.auth()
    isAuthed = true
  } catch (err) {}

  return {
    provide: {
      auth: {
        ...data,
        isAuthed,
      },
    },
  }
})
