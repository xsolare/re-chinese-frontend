export type Themes = "dark" | "light" | "blue"

export enum ApiStatus {
  NONE = "NONE",
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

export interface IPinyin {
  id: number
  pinyin: string
  initial_id: number
  final_id: number
  final_tone_id: number
  tone: number
}
