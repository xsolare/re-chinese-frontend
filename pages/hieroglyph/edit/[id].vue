<template>
  <NuxtLayout name="hieroglyph">
    <form class="hieroglyph-edit" @submit.prevent="handleCheckForm">
      <div class="hieroglyph-edit-main">
        <div class="hieroglyph-edit-content">
          <div class="hieroglyph-edit-item">
            <div class="hieroglyph-edit-title">
              <div class="hieroglyph-edit-title__content">
                <span class="hieroglyph-edit-title__pinyin">shi</span>
                <h2 class="hieroglyph-edit-title__hieroglyph">
                  取
                </h2>
              </div>
            </div>
          </div>
          <div class="hieroglyph-edit-item">
            <HieroglyphHsk :current-hsk="currentHsk" :callback="handleClickHsk" />
          </div>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import { IRangeHsk, hskSlider } from "#/types";

//                                                                      //

const currentHsk: Ref<IRangeHsk> = ref(hskSlider[0]);
const currentPartOfSpeech = ref(1);

const handleClickHsk = (hsk: IRangeHsk) => (currentHsk.value = hsk);
const handlePartOfSpeech = (id: number) => (currentPartOfSpeech.value = id);
const handleCheckForm = () => {};

definePageMeta({
  layout: "app"
});
</script>

<style lang="scss" scoped>
.hieroglyph-edit {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hieroglyph-edit-main {
  max-width: 700px;
}

.hieroglyph-edit-title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  margin: 25px 0;

  &__content {
    background-color: var(--color-background-content);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 150px;
    min-width: 150px;
    border-radius: 10px;
    box-shadow: 0 0 4px var(--color-border);
    padding: 5px;
  }

  &__pinyin {
    font-size: 2rem;
  }

  &__hieroglyph {
    font-size: 4rem;
    margin: 5px;
    font-weight: 500;
  }
}

.hieroglyph-edit-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  margin: 10px 0;

  &__hieroglyph {
    font-size: 3rem;
    width: 50px;
    height: 50px;
    margin: 0;
    font-weight: 500;
  }

  &__submit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 25px;

    button {
      cursor: pointer;
      height: 40px;
      width: 150px;
      background: var(--color-button-bg);
      border-radius: 35px;
      color: aliceblue;
      font-size: 1.1rem;
      font-weight: 500;
    }

    &.isDisabled {
      button {
        pointer-events: none;
        background: gray;
      }
    }
  }
}
</style>
