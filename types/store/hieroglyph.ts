import { ApiStatus } from ".."

//* State
export interface HieroglyphState {
  loadStatus: ApiStatus

  errors: []
}

//* Interfaces

export interface IHieroglyph {
  id: number
  hieroglyph: string
  hsk: number
  pinyinId: number
  partOfSpeechId: number
  translate: []
}
