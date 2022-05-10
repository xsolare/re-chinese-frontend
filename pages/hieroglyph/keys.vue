<template>
  <NuxtLayout name="hieroglyph">
    <div class="hieroglyph-description" v-html="$t('hieroglyph.keys.description')"></div>
    <div class="hieroglyph-keys-control">
      <div
        @click="hieroglyphKeyStore.toggleShowPinyin()"
        class="hieroglyph-keys-control__item"
        :class="{ isActive: hieroglyphKeyStore.isPinyinShowed }">
        <button class="hieroglyph-keys-control__button">
          {{ hieroglyphKeyStore.isPinyinShowed ? $t("hieroglyph.keys.hidePinyin") : $t("hieroglyph.keys.showPinyin") }}
        </button>
        <IconsSelected class="hieroglyph-keys-control__selected" />
      </div>
      <div
        @click="hieroglyphKeyStore.toggleShowHieroglyph()"
        class="hieroglyph-keys-control__item"
        :class="{ isActive: hieroglyphKeyStore.isTranslateShowed }">
        <button class="hieroglyph-keys-control__button">
          {{
            hieroglyphKeyStore.isTranslateShowed
              ? $t("hieroglyph.keys.hideTranslate")
              : $t("hieroglyph.keys.showTranslate")
          }}
        </button>
        <IconsSelected class="hieroglyph-keys-control__selected" />
      </div>
    </div>
    <div class="hieroglyph-keys-list">
      <HieroglyphKeyItem v-for="item in hieroglyphKeyStore.hieroglyphicKeys" :key="item.id" :hieroglyph="item" />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useHieroglyphKeyStore, usePinyinStore } from "#/store"

//                                                                      //

const { $t } = useNuxtApp()
const hieroglyphKeyStore = useHieroglyphKeyStore()
const pinyinStore = usePinyinStore()

await pinyinStore.init()
await hieroglyphKeyStore.init()

definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.hieroglyph-description {
  font-size: 1rem;
  padding: 5px;
  max-width: 1200px;
  margin: 0 auto;

  @include mobile {
    font-size: 0.9rem;
  }
}

.hieroglyph-keys-control {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin: 25px 0;

  &__item {
    position: relative;

    background-color: var(--color-background-content);
    border: 2px solid var(--color-background-content);
    padding: 5px 10px;
    border-radius: 10px;
    color: var(--color-text);
    min-width: 160px;
    font-size: 0.9rem;
    text-align: center;
    cursor: pointer;

    &.isActive {
      border: 2px solid var(--color-highlight);
      box-shadow: 0 0 3px var(--color-highlight);
      .hieroglyph-keys-control {
        &__selected {
          opacity: 1;
          transform: scale(1);
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          fill: var(--color-highlight);
        }
      }
    }
  }

  &__button {
    cursor: pointer;
    color: var(--color-text);
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

.hieroglyph-keys-list {
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
