<template>
  <div class="hsk-range">
    <div class="hsk-range__title">
      <div />
      <h2>hsk</h2>
    </div>
    <div class="range-value">
      <ul class="range-value__list">
        <li
          @click="handleChangeHsk(hsk)"
          class="range-value__item"
          :class="{ isActisve: activeHsk === hsk }"
          v-for="hsk in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="hsk">
          {{ hsk }}
        </li>
        <div ref="item" :style="{ left: item?.clientWidth * (activeHsk - 1) + 'px' }" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const activeHsk = ref(1)
const item = ref(null)

const handleChangeHsk = (hsk: number) => {
  activeHsk.value = hsk
}
</script>

<style scoped lang="scss">
.hsk-range {
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
}

.range-value {
  width: 100%;

  &__list {
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
      width: calc(100% / 9);
      height: 30px;
      background: var(--color-button-bg);

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
    max-width: 50px;
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
