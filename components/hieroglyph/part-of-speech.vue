<template>
  <div class="part-of-speech">
    <div class="part-of-speech__title">
      <div />
      <h2>part of speech</h2>
    </div>
    <div class="part-of-speech__list">
      <button
        v-for="part in partOfSpeech"
        :key="part.id"
        class="part-of-speech__item"
        :class="{ isActive: part.id === currentPartOfSpeech }"
        @click.prevent="callback(part.id)"
      >
        {{ part.name }}
        <IconsSelected class="part-of-speech__selected" />
      </button>
    </div>
    <!-- <div class="part-of-speech__errors">
      <span>none</span>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

const partOfSpeech = ref([
  { id: 1, name: "существительное" },
  { id: 2, name: "глагол" },
  { id: 3, name: "прилагательное" },
  { id: 4, name: "местоимение" },
  { id: 5, name: "наречие" },
  { id: 6, name: "числительное" },
  { id: 7, name: "предлог" },
  { id: 8, name: "союз" },
  { id: 9, name: "частица" }
]);

defineProps({
  currentPartOfSpeech: {
    type: Number,
    required: true
  },
  callback: {
    type: Function as PropType<(id: number) => void>,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.part-of-speech {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__title {
    position: relative;
    width: 100%;
    white-space: nowrap;

    h2 {
      text-align: center;
      background-color: var(--color-background);

      width: 200px;
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

  &__list {
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__item {
    position: relative;
    background-color: var(--color-background-content);
    font-size: 1rem;
    border-radius: 15px;
    border: 2px solid transparent;
    box-shadow: 0 0 3px var(--color-border);
    padding: 5px 10px;
    cursor: pointer;
    color: var(--color-text);

    &.isActive {
      border: 2px solid var(--color-highlight);
      box-shadow: 0 0 3px var(--color-highlight);

      .part-of-speech {
        &__selected {
          opacity: 1;
          transform: scale(1);
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      }
    }
  }

  &__selected {
    position: absolute;
    top: -10px;
    right: -5px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease-out;
  }
}
</style>
