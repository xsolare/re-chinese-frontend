<template>
  <WordsTypesQa v-if="wordsStore.currentWord.typeQuestion === 0" />
  <WordsTypesTrZh v-if="wordsStore.currentWord.typeQuestion === 1" />
  <WordsTypesZhTr v-if="wordsStore.currentWord.typeQuestion === 2" />
</template>

<script lang="ts" setup>
import { useWordsStore } from '../../store'

const wordsStore = useWordsStore()
</script>

<style lang="scss"></style>
