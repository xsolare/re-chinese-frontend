<template>
  <div class="words">
    <WordsQuestion />
  </div>
</template>

<script lang="ts" setup>
import { useWordsStore, useProgressTaskStore } from "../../store"

const wordsStore = useWordsStore()
const progressTaskStore = useProgressTaskStore()

definePageMeta({
  layout: "task",
})
</script>

<style lang="scss" scoped>
.words {
  max-width: 1000px;
  width: 100%;

  height: calc(100vh - var(--header-task-height));
  max-height: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
