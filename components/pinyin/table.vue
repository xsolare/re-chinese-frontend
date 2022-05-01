<template>
  <div class="pinyin">
    <div class="pinyin-container">
      <div :style="{ gridRow: 1 }" class="pinyin-row__empty" />

      <template :key="final.id" v-for="final in pinyinStore.finals">
        <div :style="{ gridRow: 1 }" class="pinyin-row__h" :class="{ highlight: hoverPinyin.finalPos === final.pos }">
          {{ final.name }}
        </div>
      </template>

      <template :key="initial.id" v-for="initial in pinyinStore.initials">
        <div
          :style="{ gridRow: initial.pos + 1 }"
          class="pinyin-row__v"
          :class="{ highlight: hoverPinyin.initialPos === initial.pos }">
          {{ initial.name }}
        </div>
        <template :key="pinyin.id" v-for="pinyin in cullPinyin(initial.pos)">
          <div
            v-if="pinyin?.id"
            @mouseover="handleOverPinyin(pinyin)"
            @mouseleave="handleLeavePinyin(pinyin)"
            @click.stop="handleClickPinyin(pinyin)"
            :style="{ gridRow: initial.pos + 1 }"
            class="pinyin-row">
            {{ pinyin.pinyin }}
          </div>
          <div v-else :style="{ gridRow: initial.pos + 1 }" class="pinyin-row__empty" />
        </template>
      </template>
    </div>
    <UiModal :callback="() => (isShowed = false)">
      <div class="pinyin-menu" v-if="isShowed">
        <div class="pinyin-menu__content">
          <div class="pinyin-menu-header">
            <span>{{ pinyinStore.initials.find((x) => x.id === selectedPinyin.initialId).name }}</span>
            <span> + </span>
            <span>{{ pinyinStore.finals.find((x) => x.id === selectedPinyin.finalId).name }}</span>
          </div>
          <div class="pinyin-menu-tones">
            <button
              v-for="pinyinTone in pinyinStore.pinyin.filter(
                (x) => x.finalId === selectedPinyin.finalId && x.initialId === selectedPinyin.initialId,
              )"
              :key="pinyinTone.id"
              @click.stop="handleClickTonePinyin(pinyinTone)"
              class="pinyin-menu-tones__button">
              {{ pinyinTone.pinyin }}
            </button>
          </div>
        </div>
      </div>
    </UiModal>
  </div>
</template>

<script lang="ts" setup>
import { usePinyinStore } from "#/store"
import { ApiStatus, IPinyin } from "#/types"
import { debounce } from "#/utils"
import { PropType } from "vue"

const pinyinStore = usePinyinStore()

// if (process.server) {
if (pinyinStore.loadStatus === ApiStatus.NONE || pinyinStore.loadStatus === ApiStatus.REJECTED) {
  await pinyinStore.load()
}
// }

const hoverPinyin = ref({} as IPinyin)
const selectedPinyin = ref({} as IPinyin)
const isShowed = ref(false)

const resetHoverPinyin = (pinyin: IPinyin) => {
  if (pinyin.id === hoverPinyin.value.id) hoverPinyin.value = {} as IPinyin
}
const handleLeavePinyin = debounce(resetHoverPinyin, 100)
const handleOverPinyin = (pinyin: IPinyin) => (hoverPinyin.value = pinyin)
const handleClickPinyin = (pinyin: IPinyin) => {
  selectedPinyin.value = pinyin
  isShowed.value = true
}
const handleClickTonePinyin = (pinyin: IPinyin) => {
  isShowed.value = false
  if (props?.callback) props.callback(pinyin)
}

const cullPinyin = (initialPos: number): IPinyin[] => {
  const cull = pinyinStore.pinyin.filter((x, key) => x.initialPos === initialPos && +x.tone === 5)

  cull.sort((x, y) => x.finalPos - y.finalPos)

  const sector: IPinyin[] = []

  pinyinStore.finals.forEach((x) => {
    const isExist = cull.find((y) => y.finalPos == x.pos)

    isExist ? sector.push(isExist) : sector.push({} as IPinyin)
  })

  return sector
}

const props = defineProps({
  callback: {
    type: Function as PropType<(pinyin: IPinyin) => void>,
    required: false,
  },
})
</script>

<style lang="scss" scoped>
.pinyin-control {
  display: flex;
  flex-direction: row;
  gap: 5px;

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 60px;
    height: 40px;
    text-align: center;
    background-color: var(--color-background-content);
    border-radius: 20px;
    margin: 5px 0;
    border: 1px solid var(--color-border);
    cursor: pointer;

    &.Active {
      border: 1px solid var(--color-highlight);
    }
  }
}
.pinyin {
  padding: 5px;

  width: 100%;
  height: 100%;

  margin: 0px auto;

  display: flex;
  align-items: center;
  flex-direction: column;
}
.pinyin-container {
  max-width: 1800px;
  border-radius: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(36, 1fr);
  grid-auto-rows: minmax(auto, auto);
  grid-gap: 1px;
  background-color: var(--color-border);
  border: 1px solid var(--color-border);
}
.pinyin-row {
  background-color: var(--color-background-content);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-pinyin-hover);
    transition: background-color 0.2s ease-in;
  }
  transition: background-color 0.2s ease-out;

  &__h {
    &:not(:first-child) {
      background-color: var(--color-initial);
    }
    &.highlight {
      background-color: var(--color-highlight);
      transition: background-color 0.4s ease-in;
    }
    transition: background-color 0.4s ease-out;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
  }

  &__v {
    &:not(:first-child) {
      background-color: var(--color-final);
    }
    &.highlight {
      background-color: var(--color-highlight);
      transition: background-color 0.4s ease-in;
    }
    transition: background-color 0.4s ease-out;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
  }

  &__empty {
    background-color: var(--color-background-content);
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.pinyin-menu {
  &__content {
    color: var(--color-text-invert);
    padding: 15px;

    font-size: 1rem;
    background-color: var(--color-background-modal);
    width: 320px;
    max-height: 500px;
    height: 100%;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
}
.pinyin-menu-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  color: var(--color-text-invert);
  font-size: 2rem;
  border-bottom: 2px solid var(--color-border);
  padding: 5px 0;
  margin-bottom: 10px;
}
.pinyin-menu-tones {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;

  &__button {
    color: var(--color-text-invert);
    font-size: 1.3rem;
    background-color: var(--color-background-modal-content);
    border: 1px solid var(--color-border);
    border-radius: 10px;
    padding: 5px 10px;
  }
}
</style>
