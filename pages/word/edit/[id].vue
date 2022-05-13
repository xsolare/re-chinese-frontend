<template>
  <NuxtLayout name="word">
    <form class="word-edit" @submit.prevent="handleCheckForm">
      <div class="word-edit-main">
        <div class="word-edit-content">
          <div class="word-edit-item">
            <div class="word-edit-title">
              <div v-if="!word.name.split('').length" class="word-edit-title__item">
                <span class="word-edit-title__pinyin" />
                <h2 class="word-edit-title__hieroglyph">
                  ?
                </h2>
              </div>

              <!-- Need rework -->
              <div v-for="(h, i) in word.name.split('')" v-else :key="h" class="word-edit-title__item">
                <span class="word-edit-title__pinyin"> {{ word.pinyin.split(" ")[i] }}</span>
                <h2 class="word-edit-title__hieroglyph">
                  {{ h }}
                </h2>
              </div>
            </div>
          </div>
          <div class="word-edit-item">
            <HieroglyphHsk :current-hsk="hsk" :callback="handleClickHsk" />
          </div>
          <div class="word-edit-item">
            <HieroglyphTranslate :word="word" />
          </div>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { Ref } from "vue";
import { IRangeHsk, hskSlider, languagesSlider, IRangeLanguage } from "#/types";
import { IWord } from "#/types/store";

//                                                                      //

const { $api } = useNuxtApp();

const word = ref({} as IWord);
const hsk: Ref<IRangeHsk> = ref(hskSlider[0]);

try {
  // +useRoute().params.id
  word.value = await $api().word.getById(1);
  hsk.value = hskSlider.find(x => x.value === word.value.hsk);
} catch (error) {
  useRouter().push("/404");
}

const handleClickHsk = (value: IRangeHsk) => (hsk.value = value);
const handleCheckForm = () => {};

definePageMeta({
  layout: "app"
});
</script>

<style lang="scss" scoped>
.word-edit {
  display: flex;
  align-items: center;
  justify-content: center;
}

.word-edit-main {
  max-width: 700px;
}

.word-edit-title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
  width: 100%;

  margin: 25px 0;

  &__item {
    background-color: var(--color-background-content);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 130px;
    min-width: 130px;
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

.word-edit-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  margin: 10px 0;

  &__word {
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
