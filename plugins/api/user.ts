import { AxiosInstance } from "axios"
import { IUser } from "#types/store"

export const UserApi = (instance: AxiosInstance) => ({
  async auth(): Promise<IUser> {
    const { data } = await instance.put<IUser>("/auth")

    return data
  },

  async getOne(id: number) {
    const { data } = await instance.get<IUser>("/user/", {
      params: {
        id,
      },
    })
    return data
  },

  async getAll() {
    const { data } = await instance.get<IUser[]>("/user", {})
    return data
  },
})
