<template>
  <div class="hsk-add-tone">
    <div class="hsk-add-tone__title">
      <div />
      <h2>tones</h2>
    </div>

    <div class="hsk-add-tone__list">
      <button
        v-for="tone in tones"
        :key="tone.name"
        @click.prevent="callback(tone.id)"
        :class="{ isEnable: tone.id === currentTone }"
        class="hsk-add-tone__item">
        {{ tone.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"

const tones = reactive([
  {
    id: 1,
    name: "1",
    isEnable: false,
  },
  {
    id: 2,
    name: "2",
    isEnable: false,
  },
  {
    id: 3,
    name: "3",
    isEnable: false,
  },
  {
    id: 4,
    name: "4",
    isEnable: false,
  },
  {
    id: 5,
    name: "5",
    isEnable: false,
  },
])

defineProps({
  currentTone: {
    type: Number,
    required: true,
  },
  callback: {
    type: Function as PropType<(id: number) => void>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.hsk-add-tone {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__title {
    position: relative;
    width: 100%;

    h2 {
      text-align: center;
      background-color: var(--color-background);

      width: 80px;
      margin: 10px auto;
      z-index: 5;
      position: relative;
      font-weight: 500;
    }

    div {
      z-index: 1;
      position: absolute;
      top: 50%;
      height: 1px;
      width: 100%;
      background-color: var(--color-border);
    }
  }

  &__list {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }

  &__item {
    height: 35px;
    width: 15%;
    background-color: var(--color-background-content);
    border: 1px solid var(--color-border);
    border-radius: 25px;
    text-align: center;
    font-size: 1rem;
    user-select: none;
    cursor: pointer;
    letter-spacing: 1px;

    &.isEnable {
      border: 2px solid var(--color-highlight);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
}
</style>
