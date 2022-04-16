import { IHieroglyphPostAPI } from "#/types/api"
import { IHieroglyph } from "#/types/store/hieroglyph"
import { AxiosInstance } from "axios"

export const HieroglyphApi = (instance: AxiosInstance) => ({
  async getByHieroglyph(hieroglyph: string) {
    const { data } = await instance.get<IHieroglyph[]>("/hieroglyph/name/" + hieroglyph, {})
    return data
  },

  async getByPinyin(pinyin: number) {
    const { data } = await instance.get<IHieroglyph[]>("/hieroglyph/pinyin/" + pinyin, {})
    return data
  },

  async add(dto: IHieroglyphPostAPI) {
    const { data } = await instance.post<IHieroglyph>("/hieroglyph/", {
      body: dto,
    })
    return data
  },

  async deleteById(id: number) {
    const { data } = await instance.delete<IHieroglyph>("/hieroglyph/" + id, {})
    return data
  },
})
