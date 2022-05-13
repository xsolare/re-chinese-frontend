<template>
  <div ref="menuRef" class="menu-mobile" @click.stop>
    <header class="menu-mobile__header">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          d="m0 64 24 5.3C48 75 96 85 144 74.7 192 64 240 32 288 48c48 16 96 80 144 122.7C480 213 528 235 576 240s96-5 144-48S816 75 864 58.7c48-15.7 96 26.3 144 32 48 5.3 96-26.7 144-16 48 10.3 96 64.3 144 64 48 .3 96-53.7 120-80l24-26.7v288H0Z" />
      </svg>
    </header>
    <div class="profile" @click="handleClickClose">
      <NuxtLink :to="'/'">
        <img class="profile__dashboard" :src="'/assets/image/duoluo_dalu.jpeg'" />
        <div class="profile__image">
          <img :src="userStore.userInfo?.avatar ? userStore.userInfo.avatar : '/assets/image/duoluo_dalu.jpeg'" />
          <span>{{ userStore.userInfo.username }}</span>
        </div>
      </NuxtLink>
    </div>
    <div class="menu-mobile__content">
      <div class="menu-mobile__wrapper">
        <ul>
          <li class="menu-mobile-item" @click="handleClickClose">
            <NuxtLink :to="'/'">
              <img src="/assets/image/duoluo_dalu.jpeg" alt="" class="menu-mobile-item__icon" />
              <span>None</span>
            </NuxtLink>
          </li>
          <li class="menu-mobile-item" @click="handleClickClose">
            <NuxtLink :to="'/'">
              <img src="/assets/image/duoluo_dalu.jpeg" alt="" class="menu-mobile-item__icon" />
              <span>None</span>
            </NuxtLink>
          </li>
          <li class="menu-mobile-item" @click="handleClickClose">
            <NuxtLink :to="'/'">
              <img src="/assets/image/duoluo_dalu.jpeg" alt="" class="menu-mobile-item__icon" />
              <span>None</span>
            </NuxtLink>
          </li>
        </ul>
        <ul @click.stop="signInTest">
          <li class="menu-mobile-item">
            <span @click="useSystemStore().toggleThemeSelector(true)">
              <!-- Need rework -->
              <IconsThemeLight v-if="colorMode.preference === 'light'" />
              <IconsThemeDark v-if="colorMode.preference === 'dark'" />
              <IconsThemeBlue v-if="colorMode.preference === 'blue'" />
            </span>
            <UiModal :callback="() => useSystemStore().toggleThemeSelector(false)">
              <div v-if="useSystemStore().isThemeSelector" ref="modalRef" class="menu-mobile-modal">
                <div class="menu-mobile-modal__content">
                  <button class="menu-mobile-modal__item" @click="colorMode.preference = 'light'">L</button>
                  <button class="menu-mobile-modal__item" @click="colorMode.preference = 'dark'">D</button>
                  <button class="menu-mobile-modal__item" @click="colorMode.preference = 'blue'">B</button>
                </div>
              </div>
            </UiModal>
          </li>
          <li class="menu-mobile-item">
            <span @click="useSystemStore().toggleLanguageSelector(true)">{{ $loc.toUpperCase() }}</span>
            <UiModal :callback="() => useSystemStore().toggleLanguageSelector(false)">
              <div v-if="useSystemStore().isLanguageSelector" ref="modalRef" class="menu-mobile-modal">
                <div class="menu-mobile-modal__content">
                  <button class="menu-mobile-modal__item" @click="$cLoc('ru')">RU</button>
                  <button class="menu-mobile-modal__item" @click="$cLoc('en')">EN</button>
                </div>
              </div>
            </UiModal>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useOutsideClick } from "#/composables/events/useClickOutside"
import { useSystemStore, useUserStore } from "#/store"

const modalRef = ref()
const menuRef = ref()
useOutsideClick([menuRef, modalRef], () => systemStore.toggleMenu(false))

const env = useRuntimeConfig()
const { $api, $cLoc, $loc } = useNuxtApp()
const userStore = useUserStore()
const systemStore = useSystemStore()
const colorMode = useColorMode()

const handleClickClose = () => {}

const signInTest = () => {
  if (!userStore.isLoggedIn) {
    return
  }
  $api()
    .user.signIn({
      username: "evai",
      password: "123321",
    })
    .then(async ({ user, jwt }) => {
      useUserStore().setUserSettings(user)
      useCookie(env.JWT_HEADER).value = jwt
    })
    .catch((e) => console.log("e", e))
}

useRouter().beforeEach((to, from) => {
  if (systemStore.isThemeSelector || systemStore.isLanguageSelector) {
    systemStore.$patch({
      isLanguageSelector: false,
      isThemeSelector: false,
    })
    return false
  }

  return true
})
</script>

<style lang="scss" scoped>
.menu-mobile {
  position: absolute;

  bottom: calc(var(--header-height) - 2px);
  right: 0;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    background-color: var(--color-background-modal);

    li {
      margin: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;

      a {
        width: 100%;

        display: flex;
        align-items: center;
        color: var(--color-text-invert);
        font-weight: 500;
      }
    }
  }

  &__header {
    position: sticky;
    width: 100%;
    z-index: 10;
    font-size: 0px;

    svg {
      width: 100%;
      height: 30px;
      fill: var(--color-background-modal);
      transform: rotate(0deg);
    }
  }

  &__content {
    background-color: var(--color-background-modal);
    padding: 10px 0;
    // box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.9);
    box-shadow: 0px -100px 50px var(--color-highlight);
  }

  &__wrapper {
    display: grid;
    gap: 1px;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 50px;
    background-color: var(--color-background-modal-content);
  }
}

.profile {
  min-height: 80px;
  height: 100%;
  width: 100%;
  position: relative;
  background-color: var(--color-background-modal);

  a {
    width: 100%;
    text-decoration: none;
  }

  &__image {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 20px;
    position: relative;
    z-index: 2;
    background: linear-gradient(0deg, rgba(20, 20, 20, 0.05) 0, var(--color-background-modal)),
      linear-gradient(180deg, rgba(20, 20, 20, 0.05) 0, var(--color-background-modal));
    width: 100%;
    height: 100%;

    img {
      width: 40px;
      height: 40px;
      border-radius: 90%;
      overflow: hidden;
      object-fit: cover;
    }
    span {
      font-size: 1rem;
      padding: 8px 12px;
      color: var(--color-highlight);
    }
  }

  &__dashboard {
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}

.menu-mobile-item {
  min-height: 40px;
  width: 100%;
  padding: 0 10px;
  cursor: pointer;
  justify-content: center;
  color: var(--color-text-invert);

  a {
    gap: 5px;
  }

  &__icon {
    border-radius: 50%;
    width: 24px;
    height: 24px;

    overflow: hidden;
    object-fit: cover;
  }

  border-left: 2px solid transparent;
  border-right: 2px solid transparent;

  &:hover {
    background-color: var(--color-background-modal-content);

    border-left: 2px solid var(--color-highlight);
    border-right: 2px solid var(--color-highlight);
  }

  &__hr {
    width: 90%;
    height: 1px;
    place-self: center;
    margin: 8px 0;
    background-color: var(--color-border);
  }
}

.menu-mobile-modal {
  &__content {
    padding: 30px;

    font-size: 1rem;
    background-color: var(--color-background-modal);
    width: 320px;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    align-content: center;
    justify-content: center;
  }

  &__item {
    color: var(--color-text-invert);
    width: 50px;
    height: 50px;

    border-radius: 10px;

    background-color: var(--color-background-modal-content);
    border: solid 2px var(--color-highlight);
  }
}
</style>
