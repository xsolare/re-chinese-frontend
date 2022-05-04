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
}

export interface IHieroglyphKey {
  id: number
  index: number
  pinyin: string
  hieroglyph: string
  priority: number
  alternativeHieroglyph: string
}
