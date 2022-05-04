<template>
  <div class="hieroglyph-keys-wrapper">
    <div @click="isFullyShowed = !isFullyShowed" class="hieroglyph-keys-item">
      <TransitionGroup name="item-transition">
        <div :key="hieroglyph.id + '1'" class="hieroglyph-keys-item__index">{{ hieroglyph.index }}</div>
        <div
          :key="hieroglyph.id + '2'"
          v-if="hieroglyphKeyStore.isPinyinShowed || isFullyShowed"
          class="hieroglyph-keys-item__pinyin">
          {{ hieroglyph.pinyin }}
        </div>
        <div :key="hieroglyph.id + '3'" class="hieroglyph-keys-item__hieroglyph">{{ hieroglyph.hieroglyph }}</div>
        <div
          :key="hieroglyph.id + '4'"
          v-if="hieroglyphKeyStore.isTranslateShowed || isFullyShowed"
          class="hieroglyph-keys-item__translate">
          {{ hieroglyph.pinyin }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHieroglyphKey } from "#/store"
import { IHieroglyphKey } from "#/types/store"
import { Ref, PropType } from "vue"

//                                                                      //

const hieroglyphKeyStore = useHieroglyphKey()

const isFullyShowed: Ref<boolean> = ref(false)

defineProps({
  hieroglyph: {
    type: Object as PropType<IHieroglyphKey>,
    required: true,
  },
})

definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.hieroglyph-keys-wrapper {
  cursor: pointer;
  position: relative;
  margin: 5px;

  width: 120px;
  height: 120px;

  @include mobile {
    width: 90px;
    height: 90px;
  }
}

.hieroglyph-keys-item {
  overflow: hidden;

  background-color: var(--color-background-content);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 5px;

  height: 100%;
  width: 100%;

  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    "pinyin"
    "hieroglyph"
    "translate";
  place-items: center;

  overflow: hidden;

  &__pinyin {
    grid-area: pinyin;

    font-size: 1rem;
  }

  &__hieroglyph {
    grid-area: hieroglyph;

    font-size: 2rem;
  }

  &__translate {
    grid-area: translate;

    font-size: 0.9rem;
  }

  @include mobile {
    &__pinyin {
      font-size: 0.9rem;
    }

    &__hieroglyph {
      font-size: 1.8rem;
    }

    &__translate {
      font-size: 0.7rem;
    }
  }

  &__index {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;

    top: -4px;
    left: -4px;
    height: 22px;
    width: 22px;
    background-color: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: 50%;

    @include mobile {
      top: -2px;
      left: -2px;
      height: 20px;
      width: 20px;
      font-size: 0.5rem;
      letter-spacing: 0px;
    }
  }
}
</style>
