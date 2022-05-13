import { ApiStatus } from "..";
import { IHieroglyph } from "./hieroglyph";

//* State
export interface WordsState {
  loadStatus: ApiStatus

  settings: IWordSetting
  words: IWord[]
  submitedWords: ISubmitedWord[]
  currentWord: ICurrentWord

  isPinyi: boolean
  isAnswered: boolean

  errors: []
}

//* Interfaces
export interface IWordSetting {
  typesQuestion: TypesQuestion[]
  re: true
  random: false
}

export interface IWord {
  id: number
  name: string
  pinyin: string
  hsk: number
  hieroglyphic?: IHieroglyph[]
  translate?: IWordTranslate[]
}

export interface IWordTranslate {
  id: number
  translate: string
  priority: number
  description: string
}

export interface ICurrentWord {
  typeQuestion: TypesQuestion
  word: IWord
}

export interface ISubmitedWord {
  typeQuestion: TypesQuestion
  word: IWord
  answer?: IWord
  correct: boolean
}

export const typesQuestion = [0, 1, 2] as const;
export type TypesQuestion = typeof typesQuestion[number]
