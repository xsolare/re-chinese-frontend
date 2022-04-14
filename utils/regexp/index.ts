export const matchLoginName = (str: string) => /^[a-z\d]+$/i.test(str)

export const matchName = (str: string) => /^[a-z\d\u2E80-\u9FFF]+$/i.test(str)

export const matchCname = (str: string) => /^[\u2E80-\u9FFF]+$/.test(str)

export const matchPassword = (str: string) => /^[a-z\d,./!@#$*&-]+$/i.test(str)

export const matchEmail = (str: string) => /^(\w+|\w+(\.\w+))+@(\w+\.)+\w+$/.test(str)

export const matchNumber = (str: string) => /^\d+$/.test(str)

export const matchFloatNumber = (str: string) => /^\d+(\.\d+)?$/.test(str)

export const matchIdFromUrl = (str: string): number | null => {
  const regex = /\d+((.|,)\d+)?/
  const result = str.match(regex)

  if (!result) return null

  return +result[0]
}

//? 1
export const matchChineseHieroglyph = (str: string) => /\p{Script=Han}/u.test(str)

//? 2 dont work xD
// export const matchChineseHieroglyph = (str: string) =>
//   /^(\p{Block=CJK Unified Ideographs}|\p{Block=CJK Unified Ideographs Extension A}|\p{Block=CJK Unified Ideographs Extension B}|\p{Block=CJK Unified Ideographs Extension C}|\p{Block=CJK Unified Ideographs Extension D}|\p{Block=CJK Unified Ideographs Extension E}|\p{Block=CJK Unified Ideographs Extension F}|[\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29])+$/u.test(
//     str,
//   )
