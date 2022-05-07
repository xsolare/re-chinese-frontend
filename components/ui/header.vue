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
            <NuxtLink to="/pinyin" class="header-nav__item">{{ $t("header.pinyin") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/hieroglyph/keys" class="header-nav__item mobile">
              <IconsDashboard />
              <span>{{ $t("header.hieroglyph") }}</span>
            </NuxtLink>
            <NuxtLink to="/hieroglyph/keys" class="header-nav__item">{{ $t("header.hieroglyph") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/word" class="header-nav__item mobile">
              <IconsDashboard />
              <span>{{ $t("header.word") }}</span>
            </NuxtLink>
            <NuxtLink to="/word" class="header-nav__item">{{ $t("header.word") }}</NuxtLink>
          </li>

          <!-- <li v-if="!useUserStore().isLoggedIn">
            <div class="header-nav__item signin" @click="signInTest">Sign In</div>
            <div class="header-nav__item signin mobile" @click="signInTest">
              <IconsDashboard />
              <span>{{ $t("header.profile") }}</span>
            </div>
          </li> -->
          <li>
            <div class="header-nav__item profile">
              <div class="menu-profile" :class="{ active: systemStore.isMenuOpen }">
                <NuxtLink :to="'/' + userStore.userInfo?.username">
                  <img
                    class="menu-profile__avatar"
                    :src="userStore.userInfo?.avatar ? userStore.userInfo.avatar : '/duoluo_dalu.jpeg'"
                    alt="-"
                    width="32"
                    height="32" />
                </NuxtLink>
                <div @click="systemStore.toggleMenu(!systemStore.isMenuOpen)" class="menu-profile__chevron">
                  <IconsChevron />
                </div>
                <Transition name="item-transition">
                  <HeaderMenu v-if="systemStore.isMenuOpen" />
                </Transition>
              </div>
            </div>
            <div class="header-nav__item profile mobile" @click="signInTest">
              <IconsDashboard />
              <span>{{ $t("header.profile") }}</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useSystemStore } from "#/store"
import { useUserStore } from "../../store/user"
import Dashboard from "../icons/Dashboard.vue"

const config = useRuntimeConfig()
const { $api, $auth, $t, $cLoc } = useNuxtApp()

const userStore = useUserStore()
const systemStore = useSystemStore()

const signInTest = () =>
  $api()
    .user.signIn({
      username: "evai",
      password: "123321",
    })
    .then(async (data) => {
      const { user } = await $auth.auth(data.jwt)
      console.log("user", user)
      useUserStore().setUserSettings(user)
    })
    .catch((e) => console.log("e", e))
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
    top: auto;
    bottom: 0;
    border-top: 2px solid var(--color-border);
    border-bottom: 0px solid var(--color-border);
  }
}
.header-content {
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.header-nav {
  position: relative;
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

    li a {
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
        // position: absolute;
        // right: 0;
        margin-left: auto;

        @include mobile {
          margin: 0;
        }
      }
    }

    @include mobile {
      justify-content: space-evenly;
      padding: 0 10px;
    }
  }

  &__item {
    color: var(--color-header);

    &:not(.mobile).signin {
      cursor: pointer;
      font-weight: 500;
      color: var(--color-header);
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 60px;
      height: 30px;
      background-color: var(--color-highlight);
      border-radius: 5px;

      color: var(--color-header);

      @include mobile {
        display: none;
      }
    }

    &:not(.mobile).profile {
      height: 100%;
      cursor: pointer;

      @include mobile {
        display: none;
      }
    }

    &.mobile {
      display: none;

      flex-direction: column;
      align-items: center;
      font-size: 0.9rem;
    }

    @include mobile {
      display: none;
      &.mobile {
        display: flex;
      }
      justify-content: space-evenly;
    }
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
