<template>
  <div class="range-value">
    <ul class="range-value__list">
      <li v-for="r in range" @click="callback(r)" class="range-value__item" :key="r.index">
        {{ r.value }}
      </li>
      <div
        ref="item"
        :style="{
          left: item?.getBoundingClientRect().width * current.index + 'px',
          width: 100 / range.length + '%',
        }" />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { IRange } from "#/types"
import { ref, PropType } from "vue"

const item = ref(null)

defineProps({
  range: {
    type: Array as PropType<IRange[]>,
    required: true,
  },
  current: {
    type: Object as PropType<IRange>,
    required: true,
  },
  callback: {
    type: Function as PropType<(value: IRange) => void>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.range-value {
  width: 100%;

  &__list {
    margin: 5px 0;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-radius: 15px;
    background-color: var(--color-background-content);
    width: 100%;
    // border: 1px solid var(--color-border);
    // margin: 0;

    div {
      height: 30px;
      // background: var(--color-button-bg);
      background-color: var(--color-highlight);

      position: absolute;
      left: 0;
      border-radius: 15px;
      z-index: 5;
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.1);
    }
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  }

  &__item {
    position: relative;
    z-index: 10;
    user-select: none;

    &:first-child {
      //   padding-left: 5px;
    }
    &:last-child {
      //   padding-right: 5px;
    }

    height: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0;

    &.isActive {
      background: var(--color-button-bg);
      border-radius: 15px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
