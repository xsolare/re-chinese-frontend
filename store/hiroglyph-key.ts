import { defineStore } from "pinia"
import { ApiStatus } from "../types"
import { ICurrentWord, IWord, IWordSetting, WordsState } from "types/store"
import { useProgressTaskStore } from "./progress-task"

//* =======================================================================================
//* Hieroglyph key store
//* =======================================================================================

export const useHieroglyphKey = defineStore("hieroglyphKeys", {
  state: () => ({
    loadStatus: ApiStatus.NONE,

    hieroglyphicKeys: [
      {
        id: 1,
        pinyin: "ren",
        index: 1,
        priority: 100,
        alternativeHieroglyph: "乀, 乁",
        hieroglyph: "丿",
      },
      {
        id: 2,
        pinyin: "ren",
        index: 1,
        priority: 100,
        alternativeHieroglyph: "乀, 乁",
        hieroglyph: "丿",
      },
      {
        id: 3,
        pinyin: "ren",
        index: 1,
        priority: 100,
        alternativeHieroglyph: "乀, 乁",
        hieroglyph: "丿",
      },
      {
        id: 4,
        pinyin: "ren",
        index: 1,
        priority: 100,
        alternativeHieroglyph: "乀, 乁",
        hieroglyph: "丿",
      },
    ],

    isPinyinShowed: Boolean(useCookie("is-pinyin-showed").value),
    isTranslateShowed: Boolean(useCookie("is-translate-showed").value),

    errors: [],
  }),
  getters: {},
  actions: {
    async load() {
      const { $api } = useNuxtApp()
      this.loadStatus = ApiStatus.PENDING

      try {
        const keys = $api().hieroglyph.keys()
        this.loadStatus = ApiStatus.FULFILLED

        this.hieroglyphicKeys = keys
        this.errors = []
      } catch (error) {
        this.loadStatus = ApiStatus.REJECTED
        this.errors = error
      }
    },
    toggleShowPinyin() {
      this.isPinyinShowed = !this.isPinyinShowed
      useCookie("is-pinyin-showed").value = this.isPinyinShowed ? "true" : "false"
    },
    toggleShowHieroglyph() {
      this.isTranslateShowed = !this.isTranslateShowed
      useCookie("is-translate-showed").value = this.isTranslateShowed ? "true" : "false"
    },
  },
})
