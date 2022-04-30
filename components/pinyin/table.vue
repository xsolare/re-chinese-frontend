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
            @click="handleClickPinyin(pinyin)"
            :style="{ gridRow: initial.pos + 1 }"
            class="pinyin-row">
            {{ pinyin.pinyin }}
          </div>
          <div v-else :style="{ gridRow: initial.pos + 1 }" class="pinyin-row__empty" />
        </template>
      </template>
    </div>
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

const resetHoverPinyin = (pinyin: IPinyin) => {
  if (pinyin.id === hoverPinyin.value.id) hoverPinyin.value = {} as IPinyin
}
const handleLeavePinyin = debounce(resetHoverPinyin, 100)
const handleOverPinyin = (pinyin: IPinyin) => (hoverPinyin.value = pinyin)
const handleClickPinyin = (pinyin: IPinyin) => {
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
  max-width: 1800px;
  width: 100%;
  height: 100%;
  margin: 0px auto;

  display: flex;
  align-items: center;
  flex-direction: column;
}
.pinyin-container {
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
</style>
