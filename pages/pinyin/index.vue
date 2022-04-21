<template>
  <div class="pinyin">
    <div class="pinyin-control">
      <div>1</div>
    </div>
    <div class="pinyin-container">
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">#</div>

      <div v-for="final in finals" v-bind:key="final.Id" class="pinyin-row__h">{{ final.name }}</div>
      <!-- <div v-for="initial in initials" v-bind:key="(initial.Id = 1)" class="pinyin-row__h">{{ initial.name }}</div> -->
      <div :style="{ gridRow: 2 }" class="pinyin-row__h">#</div>

      <div :style="{ gridRow: 2 }" class="pinyin-row__h">a</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row__h">o</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row__h">e</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row__h">#</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row__h">#</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row__h">er</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row__h">ai</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row__h">#</div>

      <!-- <div :style="{ gridRow: 1 }" class="pinyin-row__h">12</div>
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">13</div>
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">14</div>
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">15</div>
      <div :style="{ gridRow: 1 }" class="pinyin-row__h">16</div> -->

      <!-- <div :style="{ gridRow: 2 }" class="pinyin-row__v">21</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">22</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">23</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">24</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">25</div>
      <div :style="{ gridRow: 2 }" class="pinyin-row">26</div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const finals = [
  {
    Id: 1,
    name: "a",
    pos: 1,
  },
  {
    Id: 2,
    name: "o",
    pos: 2,
  },
  {
    Id: 3,
    name: "e",
    pos: 3,
  },
  {
    Id: 4,
    name: "i",
    pos: 4,
  },
  {
    Id: 5,
    name: "i",
    pos: 5,
  },
  {
    Id: 6,
    name: "er",
    pos: 6,
  },
  {
    Id: 7,
    name: "ai",
    pos: 7,
  },
  {
    Id: 8,
    name: "ei",
    pos: 8,
  },
  {
    Id: 9,
    name: "ao",
    pos: 9,
  },
  {
    Id: 10,
    name: "ou",
    pos: 10,
  },
  {
    Id: 11,
    name: "an",
    pos: 11,
  },
  {
    Id: 12,
    name: "en",
    pos: 12,
  },
  {
    Id: 13,
    name: "ang",
    pos: 13,
  },
  {
    Id: 14,
    name: "eng",
    pos: 14,
  },
  {
    Id: 15,
    name: "ong",
    pos: 15,
  },
  {
    Id: 16,
    name: "i",
    pos: 16,
  },
  {
    Id: 17,
    name: "ia",
    pos: 17,
  },
  {
    Id: 18,
    name: "iao",
    pos: 18,
  },
  {
    Id: 19,
    name: "ie",
    pos: 19,
  },
  {
    Id: 20,
    name: "iu",
    pos: 20,
  },
  {
    Id: 21,
    name: "ian",
    pos: 21,
  },
  {
    Id: 22,
    name: "in",
    pos: 22,
  },
  {
    Id: 23,
    name: "iang",
    pos: 23,
  },
  {
    Id: 24,
    name: "ing",
    pos: 24,
  },
  {
    Id: 25,
    name: "iong",
    pos: 25,
  },
  {
    Id: 26,
    name: "u",
    pos: 26,
  },
  {
    Id: 27,
    name: "ua",
    pos: 27,
  },
  {
    Id: 28,
    name: "uo",
    pos: 28,
  },
  {
    Id: 29,
    name: "uai",
    pos: 29,
  },
  {
    Id: 30,
    name: "ui",
    pos: 30,
  },
  {
    Id: 31,
    name: "uan",
    pos: 31,
  },
  {
    Id: 32,
    name: "un",
    pos: 32,
  },
  {
    Id: 33,
    name: "uang",
    pos: 33,
  },
  {
    Id: 34,
    name: "ueng",
    pos: 34,
  },
  {
    Id: 35,
    name: "ü",
    pos: 35,
  },
  {
    Id: 36,
    name: "üe",
    pos: 36,
  },
  {
    Id: 37,
    name: "üan",
    pos: 37,
  },
  {
    Id: 38,
    name: "ün",
    pos: 38,
  },
]

const initials = [
  {
    Id: 1,
    name: "b",
    pos: 1,
  },
  {
    Id: 2,
    name: "p",
    pos: 2,
  },
  {
    Id: 3,
    name: "m",
    pos: 3,
  },
  {
    Id: 4,
    name: "f",
    pos: 4,
  },
  {
    Id: 5,
    name: "d",
    pos: 5,
  },
  {
    Id: 6,
    name: "t",
    pos: 6,
  },
  {
    Id: 7,
    name: "n",
    pos: 7,
  },
  {
    Id: 8,
    name: "l",
    pos: 8,
  },
  {
    Id: 9,
    name: "g",
    pos: 9,
  },
  {
    Id: 10,
    name: "k",
    pos: 10,
  },
  {
    Id: 11,
    name: "h",
    pos: 11,
  },
  {
    Id: 12,
    name: "z",
    pos: 12,
  },
  {
    Id: 13,
    name: "c",
    pos: 13,
  },
  {
    Id: 14,
    name: "s",
    pos: 14,
  },
  {
    Id: 15,
    name: "zh",
    pos: 15,
  },
  {
    Id: 16,
    name: "ch",
    pos: 16,
  },
  {
    Id: 17,
    name: "sh",
    pos: 17,
  },
  {
    Id: 18,
    name: "r",
    pos: 18,
  },
  {
    Id: 19,
    name: "j",
    pos: 19,
  },
  {
    Id: 20,
    name: "q",
    pos: 20,
  },
  {
    Id: 21,
    name: "x",
    pos: 21,
  },
]

definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.pinyin {
  max-width: 1800px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.pinyin-row {
  border: 1px solid var(--color-border);
  background-color: var(--color-background-content);
  width: 25px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__h {
    // &:not(:first-child) {
    //   background-color: blue;
    // }

    border: 1px solid var(--color-border);
    width: 30px;
    height: 30px;
    font-size: 14px;
    display: flex;
    justify-content: first baseline;
    align-items: center;
  }

  &__v {
    // &:not(:first-child) {
    //   background-color: red;
    // }

    border: 1px solid var(--color-border);
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.pinyin-container {
  display: grid;
  grid-template-columns: repeat(39, 1fr);
  grid-auto-rows: minmax(25px, auto);
}
</style>
