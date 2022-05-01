<template>
  <div class="qa">
    <div class="qa__task">
      <div class="qa__item" :class="{ active: selectedWord?.id == 1 }">1</div>
      <div class="qa__item">2</div>
      <div class="qa__item">3</div>
      <div class="qa__item">4</div>
      <div class="qa__item">5</div>
      <div class="qa__item">6</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IWord } from "#/types/store"
import { Ref } from "vue"
import { useWordsStore } from "../../../store"

const selectedWord: Ref<IWord | null> = ref(null)

const handleClick = (word: IWord) => {}

const wordsStore = useWordsStore()
</script>

<style lang="scss" scoped>
.qa {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  &__task {
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 4px;
    display: flex;
    gap: 5px;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    max-width: 320px;
  }

  &__item {
    background-color: var(--color-background-content);
    // border: 1px solid var(--color-border);
    width: 100px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
