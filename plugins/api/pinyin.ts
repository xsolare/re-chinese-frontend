import { AxiosInstance } from "axios"
import { IFinals, IPinyin, IInitials } from "#/types/"

export const PinyinApi = (instance: AxiosInstance) => ({
  async getByTone(tone: string) {
    const { data } = await instance.get<IPinyin[]>("/pinyin/by-tone/" + tone, {})
    return data
  },

  async getFull() {
    const { data } = await instance.get<IPinyin[]>("/pinyin/", {})
    return data
  },

  async getFinals() {
    const { data } = await instance.get<IFinals[]>("/pinyin/finals", {})
    return data
  },

  async getInitials() {
    const { data } = await instance.get<IInitials[]>("/pinyin/initials", {})
    return data
  },
})
