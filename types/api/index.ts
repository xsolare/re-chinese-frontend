import { IHieroglyph } from "#/types/store/hieroglyph"

export type IHieroglyphPostAPI = Omit<IHieroglyph, "translate" | "id">

export interface IApiResponse {
  code: number
  msg: string
}
