<template>
  <NuxtLayout name="word">
    <form @submit.prevent="handleCheckForm" class="word-add">
      <div class="word-add-main">
        <div class="word-add-content">
          <div class="word-add-item">
            <div class="word-add-title">
              <div v-if="!hieroglyphicAccepted.length" class="word-add-title__item">
                <span class="word-add-title__pinyin"></span>
                <h2 class="word-add-title__hieroglyph">?</h2>
              </div>

              <div v-else v-for="ha in hieroglyphicAccepted" :key="ha.id" class="word-add-title__item">
                <span class="word-add-title__pinyin">
                  {{ pinyinStore.pinyin.find((x) => x.id === ha.pinyinId).pinyin }}</span
                >
                <h2 class="word-add-title__hieroglyph">
                  {{ ha.hieroglyph }}
                </h2>
              </div>
            </div>
          </div>
          <div class="word-add-item">
            <UiInput v-model:input.trim="hieroglyphic">Hieroglyphic</UiInput>
          </div>
          <div class="word-add-item">
            <HieroglyphHsk :currentHsk="hsk" :callback="handleClickHsk" />
          </div>
          <div class="word-add-item">
            <div class="word-add-item__errors">
              <TransitionGroup class="errors" name="errors">
                <span v-for="he in hieroglyphicErrors" :key="he">{{ he }}</span>
              </TransitionGroup>
            </div>
          </div>
          <div class="word-add-item">
            <!-- <div class="word-add-item__submit" :class="{ isDisabled: !word || !pinyin }"> -->
            <div class="word-add-item__submit">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { usePinyinStore } from "#/store"
import { ApiStatus, hskSlider, IRangeHsk } from "#/types"
import { IHieroglyph } from "#/types/store"
import { debounce, matchChineseHieroglyph } from "#/utils"
import { Ref } from "vue"
const { $api } = useNuxtApp()

const pinyinStore = usePinyinStore()
if (pinyinStore.loadStatus === ApiStatus.NONE || pinyinStore.loadStatus === ApiStatus.REJECTED) {
  await pinyinStore.load()
}

const hieroglyphicErrors: Ref<string[]> = ref([])
const hieroglyphic: Ref<string> = ref("")
const hieroglyphicAccepted: Ref<IHieroglyph[]> = ref([])
const hsk: Ref<IRangeHsk> = ref(hskSlider[0])

const handleClickHsk = (value: IRangeHsk) => (hsk.value = value)
const handleChangeValue = debounce((str: string) => {
  console.log("handleChangeValue")

  hieroglyphicErrors.value = []
  hieroglyphicAccepted.value = []

  if (!matchChineseHieroglyph(str)) hieroglyphicErrors.value.push("Not chinese hieroglyph")
  else {
    const hieroglyphParts = str.split("")
    hieroglyphParts.forEach((hieroglyph) => {
      $api()
        .hieroglyph.getByHieroglyph(hieroglyph)
        .then((res) => {
          res?.id ? hieroglyphicAccepted.value.push(res) : hieroglyphicErrors.value.push(hieroglyph + " not exist")
        })
        .catch((e) => hieroglyphicErrors.value.push(hieroglyph + " not exist"))
    })
  }
}, 400)
const handleCheckForm = async () => {
  let isErrors = 0

  if (!hieroglyphicAccepted.value.length) {
    hieroglyphicErrors.value.push("Hieroglyphic is empty")
    isErrors += 1
  }

  if (!isErrors) {
    try {
      const newWord = await $api().word.add({
        name: hieroglyphicAccepted.value.map((x) => x.hieroglyph).join(""),
        pinyin: hieroglyphicAccepted.value
          .map((x) => pinyinStore.pinyin.find((y) => y.id === x.pinyinId).pinyin)
          .join(" "),
        hsk: +hsk.value.value,
      })
      useRouter().push("/word/edit/" + newWord.id)
    } catch (error) {
      console.log("error", error)
    }
  }
}

watchEffect(() => {
  hieroglyphic.value
  handleChangeValue(hieroglyphic.value)
})

definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.word-add-title {
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

.word-add {
  display: flex;

  align-items: flex-start;
  justify-content: center;

  flex-direction: row;
}

.word-add-main {
  padding: 5px;
  max-width: 500px;
  width: 100%;
}

.word-add-content {
  display: flex;
  flex-direction: column;
}

.word-add-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  margin: 10px 0;

  &__submit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 5px 0;

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

  &__errors {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    justify-content: center;

    color: var(--color-error);
    font-size: 1rem;
  }
}

.errors-enter-active,
.errors-leave-active {
  transition: opacity 0.2s ease;
}

.errors-enter-from,
.errors-leave-to {
  opacity: 0;
}
</style>
