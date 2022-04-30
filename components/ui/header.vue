<template>
  <header class="header">
    <div class="header-content">
      <nav class="header-nav">
        <div class="header-nav__first first">
          <ul class="first__list">
            <li>
              <NuxtLink to="/pinyin" class="first__item mobile">
                <IconsDashboard />
                <span>Пиньин</span>
              </NuxtLink>
              <NuxtLink to="/pinyin" class="first__item">Пиньин</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/hieroglyph" class="first__item mobile">
                <IconsDashboard />
                <span>Иероглифы</span>
              </NuxtLink>
              <NuxtLink to="/hieroglyph" class="first__item">Иероглифы</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/word" class="first__item mobile">
                <IconsDashboard />
                <span>Слова</span>
              </NuxtLink>
              <NuxtLink to="/word" class="first__item">Слова</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink to="/handbook" class="first__item mobile">
                <IconsDashboard />
                <span>Учебник</span>
              </NuxtLink>
              <NuxtLink to="/handbook" class="first__item">Учебник</NuxtLink>
            </li> -->
          </ul>
        </div>
        <div class="header-nav__second second">
          <ul class="second__list">
            <li v-if="!useUserStore().isLoggedIn">
              <!-- <div class="second__signin mobile" :href="config.API_URL + '/signin'">S</div> -->
              <div class="second__signin" @click="signInTest">Sign In</div>
            </li>
            <!-- <li v-else>
              <span class="second__is-logged">IsLogged as {{ useUserStore().userInfo?.personaname || "" }}</span>
              <button class="second__logout" @click="useUserStore().removeUserSettings()">Logout</button>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from "../../store/user"
import Dashboard from "../icons/Dashboard.vue"

const config = useRuntimeConfig()
const { $api, $auth } = useNuxtApp()
const userStore = useUserStore()

const signInTest = () =>
  $api()
    .user.signIn({
      username: "evai",
      password: "evai",
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 100%;
  width: 100%;

  &__first {
    width: 100%;

    .first {
      &__list {
        align-items: center;
        justify-content: center;
        width: 100%;
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
        }

        @include mobile {
          justify-content: space-evenly;
        }
      }

      &__logo {
        width: 50px;
        height: 30px;
      }

      &__item {
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
  }

  &__second {
    @include mobile {
      display: none;
    }
    .second {
      &__list {
        list-style: none;
      }

      &__is-logged {
        color: var(--color-header);
      }

      &__signin {
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

        &.mobile {
          display: none;
        }

        @include mobile {
          display: none;

          &.mobile {
            display: flex;
          }
        }
      }

      &__logout {
        color: tomato;
        cursor: pointer;
      }
    }
  }
}
</style>
