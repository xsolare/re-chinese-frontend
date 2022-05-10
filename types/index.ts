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
  initialId: number
  finalId: number
  finalToneId: number
  tone: number
  finalPos: number
  initialPos: number
}

export interface IFinals {
  id: number
  name: string
  pos: number
}

export interface IInitials {
  id: number
  name: string
  pos: number
}

export interface IRange {
  index: number
  value: number | string
}

export interface IRangeHsk extends IRange {
  id: number
}

export const hskSlider = [
  {
    index: 0,
    value: 1,
    id: 1,
  },
  {
    index: 1,
    value: 2,
    id: 2,
  },
  {
    index: 2,
    value: 3,
    id: 3,
  },
  {
    index: 3,
    value: 4,
    id: 4,
  },
  {
    index: 4,
    value: 5,
    id: 5,
  },
  {
    index: 5,
    value: 6,
    id: 6,
  },
  {
    index: 6,
    value: 7,
    id: 7,
  },
  {
    index: 7,
    value: 8,
    id: 8,
  },
  {
    index: 8,
    value: 9,
    id: 9,
  },
] as IRangeHsk[]

export interface IRangeLanguage extends IRange {
  id: number
}

export const languagesSlider = [
  {
    index: 0,
    value: "RUS",
    id: 1,
  },
  {
    index: 1,
    value: "ENG",
    id: 2,
  },
] as IRangeLanguage[]

export type ThemeVarious = "light" | "dark" | "blue"
export type LanguageVarious = "ru" | "en"

export const ThemeVariousIcons = [
  {
    index: 0,
    value: "RUS",
    id: 1,
  },
  {
    index: 1,
    value: "ENG",
    id: 2,
  },
] as IRangeLanguage[]
