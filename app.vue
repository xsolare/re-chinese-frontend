<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore, useUserStore } from "#/store"
const { $auth } = useNuxtApp()

const userStore = useUserStore()
const systemStore = useSystemStore()

// useAsyncData("auth", async () => {
if (!systemStore.isInit) {
  if ($auth.isAuthed) {
    userStore.setUserSettings($auth.user)
    useCookie(useRuntimeConfig().JWT_HEADER).value = $auth.jwt
  }

  systemStore.$patch({ isInit: true })
}
// })
</script>
