import { IHieroglyphPostAPI, IApiResponse } from "#/types/api"
import { IHieroglyph, IHieroglyphKey } from "#/types/store/hieroglyph"
import { AxiosInstance } from "axios"

interface IApiHieroglyph extends IApiResponse {
  data: IHieroglyph | IHieroglyph[] | IHieroglyphKey[]
}

///                                                                                 //

export const HieroglyphApi = (instance: AxiosInstance) => ({
  async getByHieroglyph(hieroglyph: string) {
    const { data } = await instance.get<IApiHieroglyph>("/hieroglyph/name/" + hieroglyph, {})
    return data.data as IHieroglyph
  },

  async getByPinyin(pinyin: number) {
    const { data } = await instance.get<IApiHieroglyph>("/hieroglyph/pinyin/" + pinyin, {})
    return data.data as IHieroglyph[]
  },

  async add(dto: IHieroglyphPostAPI) {
    const { data } = await instance.post<IApiHieroglyph>("/hieroglyph/", {
      body: dto,
    })
    return data.data as IHieroglyph
  },

  async deleteById(id: number) {
    const { data } = await instance.delete<IApiHieroglyph>("/hieroglyph/" + id, {})
    return data.data as IHieroglyph
  },

  async keys() {
    const { data } = await instance.get<IApiHieroglyph>("/hieroglyph/keys")
    return data.data as IHieroglyphKey[]
  },
})
