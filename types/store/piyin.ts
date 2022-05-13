import { ApiStatus } from "..";

//* State
export interface PinyinState {
  loadStatus: ApiStatus

  pinyin: IPinyin[]
  initials: IFinal[]
  finals: IInitial[]

  errors: []
}

//* Interfaces
export interface IPinyin {
  id: number
  pinyin: string
  initialId: number
  finalId: number
  finalToneId: number
  tone: number
  initialPos: number
  finalPos: number
}

export interface IFI {
  id: number
  name: string
  pos: number
}
export type IFinal = IFI
export type IInitial = IFI
