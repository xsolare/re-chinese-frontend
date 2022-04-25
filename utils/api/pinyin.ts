import { AxiosInstance } from "axios"
import { IFinals, IPinyin, IInitials } from "#/types/"
import { IApiResponse } from "#/types/api"

interface IApiFinals extends IApiResponse {
  data: IFinals | IFinals[]
}
interface IApiPinyin extends IApiResponse {
  data: IPinyin | IPinyin[]
}
interface IApiInitials extends IApiResponse {
  data: IInitials | IInitials[]
}

///                                                                                 //

export const PinyinApi = (instance: AxiosInstance) => ({
  async getFull() {
    const { data } = await instance.get<IApiPinyin>("/pinyin/")

    return data.data as IPinyin[]
  },

  async getByTone(tone: string) {
    const { data } = await instance.get<IApiPinyin>("/pinyin/by-tone" + tone, {})
    return data.data as IPinyin[]
  },

  async getFinals() {
    const { data } = await instance.get<IApiFinals>("/pinyin/finals")
    return data.data as IFinals[]
  },

  async getInitials() {
    const { data } = await instance.get<IApiInitials>("/pinyin/initials", {})
    return data.data as IInitials[]
  },
})
