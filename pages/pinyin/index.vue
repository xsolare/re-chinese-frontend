<template>
  <div class="pinyin">
    <div class="pinyin-control">
      <div>1</div>
      <div>1 {{ userStore.userInfo.username }}</div>
    </div>
    <div class="pinyin-container">
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">11</div>
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">12</div>
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">13</div>
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">14</div>
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">15</div>
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">16</div>

      <div :style="{ gridRow: 2 }" class="pinyin-row__v">21</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">22</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">23</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">24</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">25</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">26</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "#/store"
const userStore = useUserStore()

definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.pinyin {
  max-width: 1600px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.pinyin-row {
  border: 1px solid var(--color-border);
  background-color: var(--color-background-content);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__h {
    &:not(:first-child) {
      background-color: blue;
    }

    border: 1px solid var(--color-border);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__v {
    &:not(:first-child) {
      background-color: red;
    }

    border: 1px solid var(--color-border);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.pinyin-container {
  display: grid;
  grid-template-columns: repeat(36, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
</style>
