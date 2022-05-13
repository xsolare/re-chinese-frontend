<template>
  <div class="hsk">
    <div class="hsk__title">
      <div />
      <h2>hsk</h2>
    </div>
    <div class="hsk__list">
      <UiSlider :range="hskSlider" :current="currentHsk" :callback="callback" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { IRange, hskSlider } from "#/types";

defineProps({
  currentHsk: {
    type: Object as PropType<IRange>,
    required: true
  },
  callback: {
    type: Function as PropType<(value: IRange) => void>,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.hsk {
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
</style>
