import { useUserStore } from "#/store"
import { IUser } from "#/types/store"
import { api } from "#/utils/api"

export default defineNuxtPlugin(async (nuxtApp) => {
  const env = useRuntimeConfig()

  try {
    const { user, jwt } = await api().user.auth()

    useUserStore().setUserSettings(user)
    useCookie(env.JWT_HEADER).value = jwt

    //* Not needed...
    return {
      provide: {
        auth: {
          isLoggedIn: true,
          user,
          jwt,
        },
      },
    }
  } catch (err) {
    // console.log("err")
  }

  //* Not needed...
  return {
    provide: {
      auth: {
        isLoggedIn: false,
        user: {} as IUser,
        jwt: "",
      },
    },
  }
})
