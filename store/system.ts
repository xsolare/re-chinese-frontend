import { defineStore } from "pinia"
import { SystemState } from "types/store"

//* =======================================================================================
//* System store
//* =======================================================================================

export const useSystemStore = defineStore("system", {
  state: () =>
    ({
      isInit: false,
      isMenuOpen: false,
    } as SystemState),
  getters: {
    isPhone: () => /Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator?.userAgent),
  },
  actions: {
    toggleMenu(value: boolean) {
      this.isMenuOpen = value
    },
  },
})
