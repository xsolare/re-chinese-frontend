<template>
  <div class="zh-tr">
    <div class="zh-tr__task task-content" @click.capture="wordsStore.$patch({ isPinyi: !wordsStore.isPinyi })">
      <WordsWordTask
        :word="wordsStore.currentWord.word"
        :is-pinyi="wordsStore.isPinyi"
        :is-answered="wordsStore.isAnswered"
        :mode="'zh'" />
    </div>
    <div class="zh-tr__control control-content">
      <div class="control-content__item">
        <template :key="arr" v-for="arr in [...new Array(31)]">
          <WordsWordAnswer
            :word="wordsStore.currentWord.word"
            :is-pinyi="wordsStore.isPinyi"
            :is-answered="wordsStore.isAnswered"
            :mode="'tr'" />
        </template>
      </div>
      <button @click="() => wordsStore.$patch({ isAnswered: !wordsStore.isAnswered })" class="control-content__show">
        Проверить
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWordsStore } from "../../../store"

const wordsStore = useWordsStore()
</script>

<style lang="scss" scoped>
.zh-tr {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @include mobile {
    height: 100%;
  }

  &__task {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 60%;
    width: 100%;

    // &.task-content {
    //   height: 100%;
    // }
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;

    height: 100%;
    width: 100%;

    .control-content {
      &__show {
        color: var(--color-highlight);
        cursor: pointer;
        font-size: 1.5em;
        width: 100%;
        height: 50px;
        margin: 25px 0;
        font-weight: 700;

        @include mobile {
          margin: 0;
          margin-top: 25px;
        }

        @include mobile {
          height: 50px;
          background-color: var(--color-background-modal);
        }

        &:hover {
          @include after-mobile {
            transform: scale(1.1);
            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
        }
        transition: transform 0.2s ease-out;
      }

      &__item {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        gap: 8px;
      }
    }
  }
}
</style>
