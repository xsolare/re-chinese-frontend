import { defineStore } from "pinia"
import { ApiStatus } from "../types"
import { PinyinState } from "types/store"
import { useProgressTaskStore } from "./progress-task"

//* =======================================================================================
//* Pinyin store
//* =======================================================================================

export const usePinyinStore = defineStore("pinyin", {
  state: () =>
    ({
      loadStatus: ApiStatus.NONE,

      pinyin: [],
      initials: [],
      finals: [],

      errors: [],
    } as PinyinState),
  getters: {},
  actions: {
    async load() {
      // const { $api } = useNuxtApp()
      // this.loadStatus = ApiStatus.PENDING
      // const pinyin = await $api().pinyin.getFull()
      // this.pinyin = pinyin

      const { $api } = useNuxtApp()
      this.loadStatus = ApiStatus.PENDING
      const p1 = $api().pinyin.getFull()
      const p2 = $api().pinyin.getInitials()
      const p3 = $api().pinyin.getFinals()

      try {
        const [pinyin, initials, finals] = await Promise.all([p1, p2, p3])
        this.loadStatus = ApiStatus.FULFILLED
        this.pinyin = pinyin
        this.initials = initials
        this.finals = finals
        this.errors = []
      } catch (error) {
        this.loadStatus = ApiStatus.REJECTED
        this.errors = error
      }
    },
  },
})
