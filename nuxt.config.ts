import { resolve } from "path"
import { defineNuxtConfig } from "nuxt"

export default defineNuxtConfig({
  //* build modules
  buildModules: ["@pinia/nuxt", "@nuxtjs/color-mode"],

  css: ["@/assets/scss/index.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";',
        },
      },
    },
  },

  hooks: {
    "generate:done": () => {
      console.log("√ generate:done")
    },
  },

  alias: {
    "#": resolve(__dirname, "."),
    "#components": resolve(__dirname, "components"),
    "#composables": resolve(__dirname, "composables"),
    "#types": resolve(__dirname, "types"),
    "#plugins": resolve(__dirname, "plugins"),
    "#utils": resolve(__dirname, "utils"),
  },

  publicRuntimeConfig: {
    API_URL: "https://apishka.xyz:8080",
    // API_URL: process.env.API_URL || "http://localhost:8080",
    JWT_HEADER: process.env.JWT_HEADER || "x-token",
  },

  modules: ["@nuxtjs/color-mode"],

  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },

  // proxy: {
  //   '/': { target: 'http://localhost:8080/', changeOrigin: true },
  // },

  head: {
    title: "reChinese",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  ssr: true,

  vue: {
    compilerOptions: {
      directiveTransforms: {
        clickOutside: () => ({
          props: { refs: [], callback: () => {} },
          needRuntime: false,
        }),
      },
    },
  },
})
