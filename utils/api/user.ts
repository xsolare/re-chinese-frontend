import { AxiosInstance } from "axios"
import { IUser } from "#types/store"
import { IApiResponse } from "#/types/api"

interface IUserPayload {
  password: string
  username: string
}

export interface IUserJwt {
  user: IUser
  jwt: string
}

interface IApiUser extends IApiResponse {
  data: IUser | IUser[] | IUserJwt
}

///                                                                                 //

export const UserApi = (instance: AxiosInstance) => ({
  async auth(): Promise<IUserJwt> {
    const { data } = await instance.put<IApiUser>("/user/auth", {})

    return data.data as IUserJwt
  },

  async signIn(payload: IUserPayload): Promise<IUserJwt> {
    const { data } = await instance.put<IApiUser>("/user/sign-in", {
      body: payload,
    })

    return data.data as IUserJwt
  },

  async signUp(payload: IUserPayload): Promise<IUserJwt> {
    const { data } = await instance.put<IApiUser>("/user/sign-up", {
      body: payload,
    })

    return data.data as IUserJwt
  },

  async getOne(id: number): Promise<IUser> {
    const { data } = await instance.get<IApiUser>("/user/", {
      params: {
        id,
      },
    })

    return data.data as IUser
  },

  async getAll(): Promise<IUser[]> {
    const { data } = await instance.get<IApiUser>("/user", {})

    return data.data as IUser[]
  },
})
