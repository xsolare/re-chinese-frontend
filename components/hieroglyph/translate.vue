<template>
  <div class="translate-content">
    <HieroglyphPartOfSpeech :currentPartOfSpeech="partOfSpeech" :callback="handlePartOfSpeech" />

    <div class="translate">
      <div class="translate__title">
        <div />
        <h2>Translates</h2>
      </div>
      <div class="translate__type">
        <UiSlider :range="languagesSlider" :current="language" :callback="handleClickLanguage" />
      </div>
      <div class="translate__list">
        <TransitionGroup name="item-transition">
          <div
            class="translate__item"
            v-for="(translate, index) in translates.sort((a, b) => a.priority - b.priority)"
            :key="translate.id">
            <span>{{ index }}</span>
            <p>{{ translate.translate }}</p>
            <div class="priority">
              <div class="priority__bar" />
              <div class="priority__fill" />
              <!-- <div class="priority__value" /> -->
            </div>
          </div>
        </TransitionGroup>

        <div v-if="!isCreatingTranslate" class="translate__control control-content">
          <div class="control-content__button">
            <button @click.prevent="isCreatingTranslate = true" class="control-content__add">Add</button>
          </div>
        </div>

        <div v-else class="translate__control control-content">
          <div class="control-content__item">
            <textarea placeholder="translate" />
            <input placeholder="1 - 100" maxlength="3" />
          </div>
          <div class="control-content__button">
            <button @click.prevent="handleClickSend" class="control-content__send">Send</button>
            <button @click.prevent="isCreatingTranslate = false" class="control-content__cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IRangeLanguage, languagesSlider } from "#/types"
import { IWord, IWordTranslate } from "#/types/store"
import { PropType, Ref } from "vue"

//                                                                      //

const { $api } = useNuxtApp()

const isCreatingTranslate: Ref<Boolean> = ref(false)
const partOfSpeech: Ref<number> = ref(1)
const language: Ref<IRangeLanguage> = ref(languagesSlider[0])
const translates: Ref<IWordTranslate[]> = ref([])

const handleClickLanguage = (value: IRangeLanguage) => (language.value = value)
const handlePartOfSpeech = (id: number) => (partOfSpeech.value = id)
const handleClickSend = async () => {
  // const newTranslate = await $api().word.addTranslate()
}

watchEffect(async () => {
  partOfSpeech.value
  language.value

  translates.value = []
  translates.value = await $api().word.getTranslateById(props.word.id, language.value.id, partOfSpeech.value)
})

const props = defineProps({
  word: {
    type: Object as PropType<IWord>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.translate {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px;

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
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;

    width: 100%;
    gap: 10px;
  }

  &__item {
    display: flex;
    flex-direction: row;
    align-items: center;

    position: relative;
    background-color: var(--color-background-content);
    font-size: 1rem;
    border-radius: 15px;
    border: 2px solid transparent;
    box-shadow: 0 0 3px var(--color-border);
    padding: 5px 10px;

    span {
      margin: 0;
      padding: 0;
      width: 25px;
      color: var(--color-sub-text);
    }

    p {
      margin: 0;
      padding: 0;
      white-space: normal;
      word-break: break-all;
      color: var(--color-text);
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

  &__type {
    width: 250px;
  }

  &__control {
    .control-content {
      &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
      }

      &__add {
        color: var(--color-text);
        cursor: pointer;
        width: 100%;
        font-size: 1.5rem;
        cursor: pointer;
      }

      &__send {
        color: var(--color-send-bg);
        width: 100px;
        font-size: 1.5rem;
        cursor: pointer;
      }

      &__cancel {
        color: var(--color-cancel-bg);
        width: 100px;
        font-size: 1.5rem;
        cursor: pointer;
      }

      &__item {
        display: flex;
        flex-direction: row;

        position: relative;
        background-color: var(--color-background-content);
        font-size: 1rem;
        border-radius: 15px;
        border: 2px solid transparent;
        box-shadow: 0 0 3px var(--color-border);
        padding: 5px 10px;

        textarea {
          width: 100%;
          resize: vertical;
          height: 25px;
          color: var(--color-text);
        }

        input {
          width: 50px;
          height: 25px;
          color: var(--color-sub-text);
        }
      }
    }
  }
}

.priority {
  height: 100%;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  position: relative;

  &__bar {
    height: 10px;
    width: 40%;

    background: var(--color-button-bg);
    transform: rotate(180deg);
    border-radius: 15px;
    position: absolute;
    z-index: 2;
    left: 0;
  }

  &__fill {
    height: 10px;
    width: 100%;

    position: absolute;
    background-color: var(--color-border);
    border-radius: 15px;
    z-index: 1;
    opacity: 0.5;
  }
}
</style>
