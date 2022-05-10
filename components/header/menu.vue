<template>
  <div v-click-outside="{ callback: (value) => systemStore.toggleMenu(value) }" ref="menuRef" class="menu">
    <ul>
      <li v-if="userStore.isLoggedIn" @click="handleClickClose" class="profile">
        <NuxtLink :to="'/'">
          <img class="profile__dashboard" :src="'/duoluo_dalu.jpeg'" />
          <div class="profile__image">
            <img :src="userStore.userInfo?.avatar ? userStore.userInfo.avatar : '/duoluo_dalu.jpeg'" />
            <span>{{ userStore.userInfo.username }}</span>
          </div>
        </NuxtLink>
      </li>

      <li v-else @click="handleClickClose" class="profile">
        <img class="profile__dashboard" :src="'/lain.gif'" />
        <div class="profile__image">
          <div class="sign-in">
            <span class="sign-in__message">{{ $t("auth.notAuthMessage") }}</span>
            <button class="sign-in__button">{{ $t("auth.signIn") }}</button>
          </div>
        </div>
      </li>

      <li @click="handleClickClose" class="menu-item">
        <NuxtLink :to="'/'">
          <img src="/duoluo_dalu.jpeg" alt="" class="menu-item__icon" />
          <span>None</span>
        </NuxtLink>
      </li>
      <li @click="handleClickClose" class="menu-item">
        <NuxtLink :to="'/'">
          <img src="/duoluo_dalu.jpeg" alt="" class="menu-item__icon" />
          <span>None</span>
        </NuxtLink>
      </li>
      <li @click="handleClickClose" class="menu-item">
        <NuxtLink :to="'/'">
          <img src="/duoluo_dalu.jpeg" alt="" class="menu-item__icon" />
          <span>None</span>
        </NuxtLink>
      </li>
      <hr class="menu-item__hr" />
      <li class="menu-item">
        <HeaderThemeSection />
      </li>
      <li class="menu-item">
        <HeaderLanguageSection />
      </li>
    </ul>

    <footer class="menu__footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          d="m0 64 24 5.3C48 75 96 85 144 74.7 192 64 240 32 288 48c48 16 96 80 144 122.7C480 213 528 235 576 240s96-5 144-48S816 75 864 58.7c48-15.7 96 26.3 144 32 48 5.3 96-26.7 144-16 48 10.3 96 64.3 144 64 48 .3 96-53.7 120-80l24-26.7v288H0Z"></path>
      </svg>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useOutsideClick } from "#/composables/events/useClickOutside"
import { useSystemStore, useUserStore } from "#/store"
const { $t } = useNuxtApp()

//? if need many tarhet v-click-outside
//? use ->
// const menuRef = ref()
// useOutsideClick([menuRef], () => systemStore.toggleMenu(false))

const userStore = useUserStore()
const systemStore = useSystemStore()

const handleClickClose = () => {}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;

  top: calc(var(--header-height) - 2px);
  right: 10px;
  width: 280px;

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
      }
    }
  }

  &__footer {
    position: sticky;
    width: 100%;
    z-index: 10;
    font-size: 0px;

    svg {
      width: 100%;
      height: 30px;
      fill: var(--color-background-modal);
      transform: rotate(180deg);
    }
  }
}
.profile {
  min-height: 80px;
  height: 100%;
  width: 100%;
  margin: 1px;
  position: relative;

  a {
    width: 100%;
  }

  &__image {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 20px;
    position: relative;
    z-index: 2;
    background: linear-gradient(180deg, rgba(20, 20, 20, 0.5) 0, var(--color-background-modal));
    min-width: 280px;
    height: 80px;

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
.menu-item {
  min-height: 40px;
  width: 100%;
  padding: 0 10px;
  cursor: pointer;

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

  border-left: 4px solid transparent;
  border-right: 4px solid transparent;

  &:hover {
    background-color: var(--color-background-modal-content);

    border-left: 4px solid var(--color-highlight);
    border-right: 4px solid var(--color-highlight);
  }

  &__hr {
    width: 90%;
    height: 1px;
    place-self: center;
    margin: 8px 0;
    background-color: var(--color-border);
  }
}
.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__message {
    width: 100%;
    color: var(--color-sub-text-invert);
  }
  &__button {
    width: 70px;
    height: 30px;
    border-radius: 10px;
    text-align: center;

    font-weight: 700;
    color: var(--color-highlight);
  }
}
</style>
