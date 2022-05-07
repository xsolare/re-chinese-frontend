<template>
  <div @click="active = !active" class="theme">
    <!-- {currentThemeIcon} -->
    <div>{{ $t("header.menu.theme") }}</div>
    <div class="variouse" :class="{ active: active }">
      <!-- <GiSun onClick={handleClickTheme('light')} /> <IoMdRainy onClick={handleClickTheme('blue')} /> <GiNightSleep
      onClick={handleClickTheme('dark')} /> -->
      <div class="variouse__item" @click="handleClickTheme('light')">L</div>
      <div class="variouse__item" @click="handleClickTheme('dark')">D</div>
      <div class="variouse__item" @click="handleClickTheme('blue')">B</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ThemeVarious } from "#/types"

const { $t } = useNuxtApp()
const colorMode = useColorMode()
const active = ref(false)

const handleClickTheme = (theme: ThemeVarious) => {
  colorMode.value = theme
  localStorage.setItem("nuxt-color-mode", theme)
}

// Hardcode
// const themeIcon = new Map<ThemeVarious, any>([
//   ["light", <div />],
//   ["dark", <div />],
//   ["blue", <div />],
// ])
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

  * {
    font-size: 1rem;
  }

  :first-child {
    min-width: 24px;
    min-height: 24px;
  }
}

.variouse {
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
