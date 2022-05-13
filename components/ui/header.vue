<template>
  <header class="header">
    <div class="header-content">
      <nav class="header-nav">
        <ul class="header-nav__list">
          <li>
            <NuxtLink to="/pinyin" class="header-nav__item mobile">
              <IconsDashboard />
              <span>{{ $t("header.pinyin") }}</span>
            </NuxtLink>
            <NuxtLink to="/pinyin" class="header-nav__item">
              {{ $t("header.pinyin") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hieroglyph/keys" class="header-nav__item mobile">
              <IconsDashboard />
              <span>{{ $t("header.hieroglyph") }}</span>
            </NuxtLink>
            <NuxtLink to="/hieroglyph/keys" class="header-nav__item">
              {{ $t("header.hieroglyph") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/word" class="header-nav__item mobile">
              <IconsDashboard />
              <span>{{ $t("header.word") }}</span>
            </NuxtLink>
            <NuxtLink to="/word" class="header-nav__item">
              {{ $t("header.word") }}
            </NuxtLink>
          </li>

          <li>
            <div class="header-nav__item profile">
              <div class="menu-profile" :class="{ active: systemStore.isMenuOpen }">
                <NuxtLink :to="'/'">
                  <img
                    class="menu-profile__avatar"
                    :src="userStore.userInfo?.avatar ? userStore.userInfo.avatar : '/assets/image/duoluo_dalu.jpeg'"
                    alt="-"
                    width="32"
                    height="32" />
                </NuxtLink>
                <div class="menu-profile__chevron" @click="systemStore.toggleMenu(!systemStore.isMenuOpen)">
                  <IconsChevron />
                </div>
              </div>
            </div>
            <div
              class="header-nav__item profile mobile"
              :class="{ active: systemStore.isMenuOpen }"
              @click="systemStore.toggleMenu(!systemStore.isMenuOpen)">
              <IconsAccount />
              <span>{{ $t("header.profile") }}</span>
            </div>
            <Transition name="item-transition">
              <template v-if="systemStore.isMenuOpen">
                <HeaderMenuMobile v-if="useSystemStore().isMobile" />
                <HeaderMenu v-else />
              </template>
            </Transition>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useUserStore } from "../../store/user"
import { useSystemStore } from "#/store"

const env = useRuntimeConfig()
const { $api, $t, $cLoc } = useNuxtApp()

const userStore = useUserStore()
const systemStore = useSystemStore()
</script>

<style scoped lang="scss">
.header {
  --tw-gradient-from: var(--color-header-highlight-bg);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsla(0, 0%, 100%, 0));
  --tw-gradient-to: var(--color-header-bg);
  background-color: var(--color-header-bg);
  background-image: linear-gradient(to top right, var(--tw-gradient-stops));

  border-bottom: 2px solid var(--color-border);

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  height: var(--header-height);
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 25;

  @include mobile {
    z-index: 25;
    top: auto;
    bottom: 0;
    border-top: 2px solid var(--color-border);
    border-bottom: 0px solid var(--color-border);
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
  }
}
.header-content {
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.header-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  height: 100%;
  width: 100%;

  &__list {
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 50px;

    .icon {
      display: none;
    }

    li a,
    span {
      text-decoration: none;
      color: var(--color-header);
      font-weight: 500;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;

      &:last-child {
        margin-left: auto;

        @include mobile {
          margin: 0;
        }
      }
    }

    @include mobile {
      justify-content: space-between;
      gap: 0px;
    }
  }

  &__item {
    color: var(--color-header);
    cursor: pointer;

    &:not(.mobile).profile {
      height: 100%;
      cursor: pointer;
    }

    &.mobile {
      display: none;

      flex-direction: column;
      align-items: center;
      font-size: 0.5rem;
      min-width: 70px;
    }

    @include mobile {
      display: none;
      &.mobile {
        display: flex;
      }

      &.active {
        pointer-events: none;
      }
      justify-content: space-evenly;
    }
  }

  @include mobile {
    padding: 0 20px;
  }
}

.menu-profile {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 86px;

  * {
    user-select: none;
  }

  &.active {
    background-color: var(--color-background-modal-content);
    transition: all 0.1s ease-in;

    .menu-profile__chevron {
      transform: rotate(180deg);
      transition: all 0.1s ease-in;
      pointer-events: none;
    }
  }

  &__avatar {
    border-radius: 50%;
    min-width: 32px;
    min-height: 32px;
    overflow: hidden;
    object-fit: cover;
    cursor: pointer;
  }

  &__chevron {
    height: 100%;
    padding: 0 5px;

    display: flex;
    align-items: center;
    cursor: pointer;

    transform: rotate(0deg);
    transition: all 0.1s ease-out;

    fill: var(--color-header);
  }
  transition: all 0.1s ease-in;
}
</style>
