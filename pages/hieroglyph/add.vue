<template>
  <NuxtLayout name="hieroglyph">
    <div class="hieroglyph-add">
      <div class="hieroglyph-add-content">
        <div class="hieroglyph-add-item">
          <UiInput v-model:input.trim="pinyin">Pinyin</UiInput>
          <UiInput v-model:input.trim="hieroglyph">Hieroglyph</UiInput>
        </div>
        <div class="hieroglyph-add-item">
          <button
            v-for="tone in tones"
            @click="handleClickTone(tone.id)"
            :key="tone.name"
            :class="{ isEnable: tone.isEnable }"
            class="hieroglyph-add-item__pinyin">
            {{ tone.name }}
          </button>
        </div>
        <div class="hieroglyph-add-item">
          <UiSlider />
        </div>
        <div class="hieroglyph-add-item">
          <div class="hieroglyph-add-item__submit">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const pinyin = ref("")
const hieroglyph = ref("")
const tones = reactive([
  {
    id: 1,
    name: "1",
    isSelected: false,
    isEnable: false,
  },
  {
    id: 2,
    name: "2",
    isSelected: false,
    isEnable: false,
  },
  {
    id: 3,
    name: "3",
    isSelected: false,
    isEnable: false,
  },
  {
    id: 4,
    name: "4",
    isSelected: false,
    isEnable: false,
  },
  {
    id: 5,
    name: "5",
    isSelected: false,
    isEnable: false,
  },
])

const handleClickTone = (id: number) => tones.map((x) => (x.isEnable = x.id === id ? true : false))

definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.hieroglyph-add {
  max-width: 500px;
  margin: 0 auto;
  padding: 5px;
}

.hieroglyph-add-content {
  display: flex;
  flex-direction: column;
}

.hieroglyph-add-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  margin: 10px 0;

  &__pinyin {
    height: 35px;
    width: 15%;
    background-color: var(--color-background-content);
    border: 1px solid var(--color-border);
    border-radius: 25px;
    text-align: center;
    font-size: 1rem;
    user-select: none;
    cursor: pointer;
    letter-spacing: 1px;

    &.isEnable {
      border: 2px solid var(--color-highlight);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }

  &__submit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 25px;

    button {
      height: 40px;
      width: 150px;
      background: var(--color-button-bg);
      border-radius: 35px;
      color: aliceblue;
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
}
</style>
