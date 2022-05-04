import { IHieroglyph } from "#/types/store/hieroglyph"
import { IWord } from "../store"

export interface IApiResponse {
  code: number
  msg: string
}

export type IHieroglyphPostAPI = Omit<IHieroglyph, "id">

export type IWordPostDTO = {
  name: string
  pinyin: string
  hsk: number
}

export type IWordTranslatePostDTO = {
  wordId: number
  langId: number
  partOfSpeechId: number
  translate: string
}
