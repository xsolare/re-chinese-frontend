<template>
  <NuxtLayout name="hieroglyph">
    <div class="hieroglyph-keys-control">
      <div class="hieroglyph-keys-control__item" :class="{ isActive: hieroglyphKeyStore.isPinyinShowed }">
        <button @click="hieroglyphKeyStore.toggleShowPinyin()" class="hieroglyph-keys-control__button">
          Show pinyin
        </button>
        <IconsSelected class="hieroglyph-keys-control__selected" />
      </div>
      <div class="hieroglyph-keys-control__item" :class="{ isActive: hieroglyphKeyStore.isTranslateShowed }">
        <button @click="hieroglyphKeyStore.toggleShowHieroglyph()" class="hieroglyph-keys-control__button">
          Show translate
        </button>
        <IconsSelected class="hieroglyph-keys-control__selected" />
      </div>
    </div>
    <div class="hieroglyph-keys-list">
      <HieroglyphKeyItem v-for="item in hieroglyphKeyStore.hieroglyphicKeys" :key="item.id" :hieroglyph="item" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useHieroglyphKey } from "#/store"
import { ApiStatus } from "#/types"
import { Ref } from "vue"

//                                                                      //

const hieroglyphKeyStore = useHieroglyphKey()

if (hieroglyphKeyStore.loadStatus === ApiStatus.NONE || hieroglyphKeyStore.loadStatus === ApiStatus.REJECTED) {
  await hieroglyphKeyStore.load()
}

definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
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
    cursor: pointer;

    &.isActive {
      border: 2px solid var(--color-highlight);
      box-shadow: 0 0 3px var(--color-highlight);
      .hieroglyph-keys-control {
        &__selected {
          opacity: 1;
          transform: scale(1);
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      }
    }
  }

  &__button {
    cursor: pointer;
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
