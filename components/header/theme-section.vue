<template>
  <div class="theme" @click="active = !active">
    <div class="theme__title">
      {{ $t("header.menu.theme") }}
    </div>
    <div class="theme-variouse" :class="{ active: active }">
      <div class="variouse__item" @click="colorMode.preference = 'light'">
        L
      </div>
      <div class="variouse__item" @click="colorMode.preference = 'dark'">
        D
      </div>
      <div class="variouse__item" @click="colorMode.preference = 'blue'">
        B
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSystemStore } from "#/store/system";
import { ThemeVarious } from "#/types";

const { $t } = useNuxtApp();
const active = ref(false);
const colorMode = useColorMode();
</script>

<style lang="scss" scoped>
.theme {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  width: 100%;
  overflow-x: hidden;

  font-size: 1rem;

  :first-child {
    min-width: 24px;
    min-height: 24px;
  }
  color: var(--color-text-invert);
}

.theme-variouse {
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 5px;

  &__item {
    min-width: 24px;
    min-height: 24px;
  }

  svg {
    min-width: 24px;
    min-height: 24px;

    &:hover {
      fill: var(--color-highlight);
      transition: all 0.2s ease-in;
    }
    transition: all 0.2s ease-out;
  }

  transform: translateX(150px);

  &.active {
    transform: translateX(0px);
    transition: all 0.2s ease-in;
  }
  transition: all 0.2s ease-out;
}
</style>
