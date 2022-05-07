<template>
  <div @click="active = !active" class="language">
    <!-- {currentThemeIcon} -->
    <div>{{ $t("header.menu.language") }}</div>
    <div class="variouse" :class="{ active: active }">
      <!-- <GiSun onClick={handleClickTheme('light')} /> <IoMdRainy onClick={handleClickTheme('blue')} /> <GiNightSleep
      onClick={handleClickTheme('dark')} /> -->
      <div class="variouse__item" @click="handleClickLanguage('ru')">RU</div>
      <div class="variouse__item" @click="handleClickLanguage('en')">EN</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LanguageVarious } from "#/types"

const { $t, $cLoc } = useNuxtApp()
const active = ref(false)

const handleClickLanguage = (lang: LanguageVarious) => {
  $cLoc(lang)
}
</script>

<style lang="scss" scoped>
.language {
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
