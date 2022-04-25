<template>
  <NuxtLayout name="hieroglyph">
    <form @submit.prevent="handleCheckForm" class="hieroglyph-add">
      <div class="hieroglyph-add-pinyin">
        <div class="hieroglyph-add-header">
          <h2>{{ pinyin }}</h2>
        </div>
      </div>
      <div class="hieroglyph-add-main">
        <div class="hieroglyph-add-content">
          <div class="hieroglyph-add-item">
            <!-- <UiInput v-model:input.trim="pinyin">Pinyin</UiInput> -->
            <!-- <UiInput v-model:input.trim="hieroglyph">Hieroglyph</UiInput> -->
            <div class="hieroglyph-add-fields">
              <SelectPinyin v-model:input.trim="pinyin" />
              <UiInputHieroglyph v-model:input.trim="hieroglyph">Hieroglyph</UiInputHieroglyph>
              <!-- <span class="hieroglyph-add-fields__pinyin">shi</span> -->
              <!-- <h2 class="hieroglyph-add-fields__hieroglyph">取</h2> -->
            </div>
          </div>
          <div class="hieroglyph-add-item">
            <HieroglyphHsk :currentHsk="currentHsk" :callback="handleClickHsk" />
          </div>
          <!-- <div class="hieroglyph-add-item"> -->
          <!-- <HieroglyphPartOfSpeech :currentPartOfSpeech="currentPartOfSpeech" :callback="handlePartOfSpeech" /> -->
          <!-- </div> -->
          <div class="hieroglyph-add-item">
            <div
              class="hieroglyph-add-item__submit"
              :class="{ isDisabled: pinyinErrors?.length || hieroglyphErrors?.length }">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div class="hieroglyph-add-hieroglyph">
        <div class="hieroglyph-add-header">
          <h2>{{ hieroglyph }}</h2>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { IRangeHsk, hskSlider } from "#/types"
import { debounce, matchChineseHieroglyph } from "#/utils"
import { Ref } from "vue"

//                                                                      //

const pinyin = ref("")
const hieroglyph = ref("")

const pinyinErrors = ref([])
const hieroglyphErrors = ref([])

const currentTone: Ref<number> = ref(1)
const currentHsk: Ref<IRangeHsk> = ref(hskSlider[0])
const currentPartOfSpeech: Ref<number> = ref(1)

const handleClickTone = (id: number) => (currentTone.value = id)
const handleClickHsk = (hsk: IRangeHsk) => (currentHsk.value = hsk)
const handlePartOfSpeech = (id: number) => (currentPartOfSpeech.value = id)

//TODO
//? const gg = () => console.log("gg")
//? const d_gg = debounce(gg, 1000)
//? watchEffect(() => {
//?   console.log("currentTone - ", currentTone.value)
//?   d_gg()
//? })

const handleCheckForm = () => {
  console.log("p - ", pinyin.value, "h - ", hieroglyph.value)
  console.log("Check - ", matchChineseHieroglyph(hieroglyph.value))
}

definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.hieroglyph-add-fields {
  // background-color: var(--color-background-content);
  // box-shadow: 0 0 4px var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 150px;
  max-width: 200px;
  border-radius: 10px;
  padding: 5px 25px;

  &__pinyin {
    font-size: 2rem;
  }

  &__hieroglyph {
    font-size: 4rem;
    margin: 5px;
    font-weight: 500;
  }
}

.hieroglyph-add {
  display: flex;
  justify-content: space-between;

  align-items: flex-start;
  justify-content: center;

  flex-direction: row;
}

.hieroglyph-add-pinyin,
.hieroglyph-add-hieroglyph {
  width: 100%;
  display: none;
}

.hieroglyph-add-main {
  padding: 5px;
  max-width: 500px;
  width: 100%;
}

.hieroglyph-add-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;

  h2 {
    min-width: 50px;
    min-height: 50px;
    // border: 2px solid var(--color-border);
    border-top: 2px solid var(--color-border);
    border-bottom: 2px solid var(--color-border);

    border-radius: 5px;
    text-align: center;
    margin: 0;
    padding: 0;
    line-height: 50px;
    font-weight: 500;
    letter-spacing: 1px;
  }
}

.hieroglyph-add-content {
  display: flex;
  flex-direction: column;
}

.hieroglyph-add-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;

  &__submit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 25px;

    button {
      cursor: pointer;
      height: 40px;
      width: 150px;
      background: var(--color-button-bg);
      border-radius: 35px;
      color: aliceblue;
      font-size: 1.1rem;
      font-weight: 500;
    }

    &.isDisabled {
      button {
        pointer-events: none;
        background: gray;
      }
    }
  }
}
</style>
