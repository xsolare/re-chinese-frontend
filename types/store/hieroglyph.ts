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
  pinyin_id: number
  part_of_speech_id: number
  translate: []
}
