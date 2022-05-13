import { defineStore } from "pinia";
import { ApiStatus } from "../types";
import { useProgressTaskStore } from "./progress-task";
import { HieroglyphKeyState, ICurrentWord, IWord, IWordSetting, WordsState } from "types/store";

//* =======================================================================================
//* Hieroglyph key store
//* =======================================================================================

export const useHieroglyphKeyStore = defineStore("hieroglyphKeys", {
  state: () =>
    ({
      loadStatus: ApiStatus.NONE,

      hieroglyphicKeys: [],

      isPinyinShowed: Boolean(useCookie("isPinyinShowed").value),
      isTranslateShowed: Boolean(useCookie("isTranslateShowed").value),

      errors: []
    } as HieroglyphKeyState),
  getters: {},
  actions: {
    async init () {
      if (this.loadStatus === ApiStatus.NONE || this.loadStatus === ApiStatus.REJECTED) {
        await useHieroglyphKeyStore().load();
      }
    },
    async load () {
      const { $api } = useNuxtApp();
      this.loadStatus = ApiStatus.PENDING;

      try {
        const keys = await $api().hieroglyph.keys();
        this.loadStatus = ApiStatus.FULFILLED;

        this.hieroglyphicKeys = keys;
        this.errors = [];
      } catch (error) {
        this.loadStatus = ApiStatus.REJECTED;
        this.errors = error;
      }
    },
    toggleShowPinyin () {
      this.isPinyinShowed = !this.isPinyinShowed;
      useCookie("isPinyinShowed").value = this.isPinyinShowed ? "true" : "false";
    },
    toggleShowHieroglyph () {
      this.isTranslateShowed = !this.isTranslateShowed;
      useCookie("isTranslateShowed").value = this.isTranslateShowed ? "true" : "false";
    }
  }
});
