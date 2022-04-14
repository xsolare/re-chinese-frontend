<template>
  <div>
    <Head>
      <Link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <Link rel="preload" as="image" href="/logo.webp" type="image/webp" />
      <Meta name="theme-color" content="#6d1942" />
    </Head>

    <Head :key="canonicalUrl">
      <Meta property="og:url" :content="canonicalUrl" />
      <Link rel="canonical" :href="canonicalUrl" />
    </Head>

    <slot />
  </div>
</template>

<script setup lang="ts">
const { $t } = useNuxtApp()

const currentRoute = computed(() => useRouter().currentRoute.value)
const routeName = computed(() => currentRoute.value.name)
const canonicalUrl = computed(() => currentRoute.value.path.replace(/\/$/, ""))

useMeta({
  meta: [
    { property: "og:title", content: "$t('meta.title')" },
    { property: "og:description", content: "$t('about.content')" },
    { property: "og:image", content: "/banner.jpg" },
    { property: "og:type", content: "profile" },
  ],
})
</script>

<style scoped lang="scss"></style>
