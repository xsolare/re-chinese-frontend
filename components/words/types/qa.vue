<template>
  <div class="qa">
    <div class="qa__task task-content" @click.capture="wordsStore.$patch({ isPinyi: !wordsStore.isPinyi })">
      <WordsWordTask
        :word="wordsStore.currentWord.word"
        :is-pinyi="wordsStore.isPinyi"
        :is-answered="wordsStore.isAnswered"
        :mode="'zh'"
      />
    </div>
    <div class="qa__control control-content">
      <button
        v-if="!wordsStore.isAnswered"
        class="control-content__show"
        @click="() => wordsStore.$patch({ isAnswered: !wordsStore.isAnswered })"
      >
        Проверить
      </button>
      <template v-else>
        <button
          class="control-content__submit control-content__submit_no"
          @click="
            () => {
              wordsStore.validateAnswer()
              wordsStore.nextWord()
            }
          "
        >
          Нет
        </button>
        <button
          class="control-content__submit control-content__submit_yes"
          @click="
            () => {
              wordsStore.validateAnswer(wordsStore.currentWord.word)
              wordsStore.nextWord()
            }
          "
        >
          Да
        </button>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWordsStore } from "../../../store";

const wordsStore = useWordsStore();
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;

    // .task-content {
    // }
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    height: 50px;
    width: 100%;

    .control-content {
      &__show {
        color: var(--color-sub-text);
        cursor: pointer;
        font-size: 1.5em;
        transition: transform 0.2s ease-out;
        width: 100%;
        height: 100%;

        &:hover {
          @include after-mobile {
            // transform: scale(1.1);
            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
        }

        @include mobile {
          height: 50px;
          background-color: var(--color-background-modal);
        }
      }

      &__submit {
        cursor: pointer;
        font-size: 1.5em;
        width: 100px;
        transition: transform 0.2s ease-out;
        &:hover {
          @include after-mobile {
            transform: scale(1.1);
            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
        }

        &_no {
          color: var(--color-no-bg);
        }
        &_yes {
          color: var(--color-yes-bg);
        }
      }
    }
  }
}
</style>
