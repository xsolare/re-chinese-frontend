import { IApiResponse, IWordPostDTO, IWordTranslatePostDTO } from "#/types/api"
import { IWord, IWordTranslate } from "#/types/store"
import { AxiosInstance } from "axios"
interface IApiWord extends IApiResponse {
  data: IWord | IWord[] | IWordTranslate[]
}

///                                                                                 //

export const WordApi = (instance: AxiosInstance) => ({
  async add(dto: IWordPostDTO) {
    const { data } = await instance.post<IApiWord>("/word/", {
      body: dto,
    })
    return data.data as IWord
  },

  async getById(id: number) {
    const { data } = await instance.get<IApiWord>("/word/" + id)
    return data.data as IWord
  },

  async getTranslateById(id: number, langId: number, partOfSpeechId: number) {
    const { data } = await instance.get<IApiWord>("/word/translate/" + id, {
      params: {
        lang: langId,
        partOfSpeech: partOfSpeechId,
      },
    })
    return data.data as IWordTranslate[]
  },

  async addTranslate(dto: IWordTranslatePostDTO) {
    const { data } = await instance.post<IApiWord>("/word/", {
      body: dto,
    })
    return data.data as IWord
  },
})
