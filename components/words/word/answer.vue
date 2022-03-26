<template>
  <div @click="handleClickSelect" v-if="mode === 'zh'" class="word-answer" :class="{ selected }">
    <div class="word-answer__pinyin">
      <!-- <span v-show="isPinyi">{{ word.pinyin }}</span> -->
      <p v-show="isPinyi">{{ word.pinyin }}</p>
    </div>
    <span class="word-answer__text">{{ word.original }}</span>
    <div class="word-answer__tr">
      <p v-if="isAnswered">{{ word.translate }}</p>
    </div>
  </div>

  <div @click="handleClickSelect" v-else class="word-answer" :class="{ selected }">
    <div class="word-answer__pinyin">
      <p v-show="isAnswered">{{ word.pinyin }}</p>
    </div>
    <span class="word-answer__text">{{ word.translate }}</span>
    <div class="word-answer__tr">
      <p v-if="isAnswered">{{ word.original }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { IWord } from '../../../types/store/words'

const selected = ref(false)

const handleClickSelect = () => {
  selected.value = !selected.value
}

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
    type: String as PropType<'zh' | 'tr'>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.word-answer {
  background-color: var(--color-background-content);
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 4px var(--color-border);

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;

  &__pinyin {
    font-size: 1.4em;
    color: var(--color-text);

    > * {
      margin: 0;
      margin-bottom: 4px;
    }

    @include mobile {
      font-size: 1.3em;
    }
  }

  &__text {
    font-size: 1.6em;
    color: var(--color-text);

    @include mobile {
      font-size: 1.8em;
    }
  }

  &__tr {
    font-size: 1.4em;
    color: var(--color-sub-text);

    > * {
      margin: 0;
      margin-top: 4px;
      animation: fadein 0.2s ease-in;
    }

    @include mobile {
      font-size: 1.3em;
    }
  }

  &.selected {
    border: 1px solid var(--color-highlight);
    background-color: var(--color-highlight-ans);
  }
}
</style>
