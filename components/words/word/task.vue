<template>
  <div v-if="mode === 'zh'" class="word-task">
    <div class="word-task__pinyin">
      <span v-show="isPinyi || isAnswered">{{ word.pinyin }}</span>
    </div>
    <span class="word-task__text">{{ word.hieroglyphic }}</span>
    <div class="word-task__tr">
      <span v-if="isAnswered">{{ word.translate }}</span>
    </div>
  </div>

  <div v-else class="word-task">
    <div class="word-task__pinyin">
      <span v-if="isAnswered">{{ word.pinyin }}</span>
    </div>
    <span class="word-task__text">{{ word.translate }}</span>
    <div class="word-task__tr">
      <span v-if="isAnswered">{{ word.hieroglyphic }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import { IWord } from "../../../types/store/words"

defineProps({
  word: {
    type: Object as PropType<IWord>,
    required: true,
  },
  isPinyi: {
    type: Boolean,
    required: true,
  },
  isAnswered: {
    type: Boolean,
    required: true,
  },
  mode: {
    type: String as PropType<"zh" | "tr">,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.word-task {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &__pinyin {
    animation: fadein 0.2s ease-in;
    font-size: 1.8em;
    color: var(--color-text);
    min-height: 35px;
    line-height: 35px;

    @include mobile {
      font-size: 2em;
    }
  }

  &__text {
    font-size: 2em;
    color: var(--color-text);

    @include mobile {
      font-size: 2.2em;
    }
  }

  &__tr {
    animation: fadein 0.2s ease-in;
    font-size: 1.6em;
    color: var(--color-sub-text);
    min-height: 35px;
    line-height: 35px;

    @include mobile {
      font-size: 1.8em;
    }
  }
}
</style>
