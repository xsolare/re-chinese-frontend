import { defineStore } from "pinia"
import { ApiStatus } from "../types"
import { HieroglyphKeyState, ICurrentWord, IWord, IWordSetting, WordsState } from "types/store"
import { useProgressTaskStore } from "./progress-task"

//* =======================================================================================
//* Hieroglyph key store
//* =======================================================================================

export const useHieroglyphKeyStore = defineStore("hieroglyphKeys", {
  state: () =>
    ({
      loadStatus: ApiStatus.NONE,

      hieroglyphicKeys: [],

      isPinyinShowed: Boolean(useCookie("is-pinyin-showed").value),
      isTranslateShowed: Boolean(useCookie("is-translate-showed").value),

      errors: [],
    } as HieroglyphKeyState),
  getters: {},
  actions: {
    async init() {
      if (this.loadStatus === ApiStatus.NONE || this.loadStatus === ApiStatus.REJECTED) {
        await useHieroglyphKeyStore().load()
      }
    },
    async load() {
      const { $api } = useNuxtApp()
      this.loadStatus = ApiStatus.PENDING

      try {
        const keys = await $api().hieroglyph.keys()
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
