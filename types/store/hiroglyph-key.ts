import { ApiStatus } from ".."
import { IHieroglyph } from "./hieroglyph"

//* State
export interface HieroglyphKeyState {
  loadStatus: ApiStatus

  hieroglyphicKeys: IHieroglyphKey[]

  isPinyinShowed: boolean
  isTranslateShowed: boolean

  errors: []
}

//* Interfaces

export interface IHieroglyphKey {
  id: number
  index: number
  priority: number
  alternativeHieroglyph: string
  hieroglyph: IHieroglyph
  translate: [
    {
      translate: string
      languageId: number
    },
  ]
}
