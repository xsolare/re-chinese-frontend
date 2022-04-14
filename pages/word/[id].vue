<template>
  <div class="words">
    <WordsQuestion />
  </div>
</template>

<script lang="ts" setup>
import { useWordsStore, useProgressTaskStore } from '../../store'

const wordsStore = useWordsStore()
const progressTaskStore = useProgressTaskStore()

await useAsyncData('words', async () => {
  wordsStore.$patch({
    words: [
      {
        id: 1,
        original: '数字',
        pinyin: 'shùzì',
        translate: 'номер',
        hsk: 1,
        type: 'noun',
      },
      {
        id: 2,
        original: '几号',
        pinyin: 'jǐhào',
        translate: 'цифра',
        hsk: 1,
        type: 'noun',
      },
      {
        id: 3,
        original: '你好',
        pinyin: 'nǐ hǎo',
        translate: 'привет',
        hsk: 1,
        type: 'noun',
      },
      {
        id: 4,
        original: '而',
        pinyin: 'ér',
        translate: 'пока  ',
        hsk: 1,
        type: 'noun',
      },
      {
        id: 5,
        original: '帅',
        pinyin: 'shuài',
        translate: 'красивый',
        hsk: 1,
        type: 'noun',
      },
    ],
    settings: {
      typesQuestion: [0],
      re: true,
      random: false,
    },
    currentWord: {
      typeQuestion: 0,
      word: {
        id: 1,
        original: '数字',
        pinyin: 'shùzì',
        translate: 'номер',
        hsk: 1,
        type: 'noun',
      },
    },
  })

  progressTaskStore.$patch({
    count: 5,
    currentTaskId: 1,
  })
})

definePageMeta({
  layout: 'task',
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
