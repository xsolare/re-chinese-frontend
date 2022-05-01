<template>
  <NuxtLayout name="hieroglyph">
    <form @submit.prevent="handleCheckForm" class="hieroglyph-add">
      <div class="hieroglyph-add-main">
        <div class="hieroglyph-add-content">
          <div class="hieroglyph-add-item">
            <div @click.capture.prevent class="hieroglyph-add-fields">
              <UiInputHieroglyph v-model:input.trim="hieroglyph">Hieroglyph</UiInputHieroglyph>
              <UiSelectPinyin :value="pinyin" :callback="handleClickPinyin" />
            </div>
          </div>
          <div class="hieroglyph-add-item">
            <HieroglyphHsk :currentHsk="hsk" :callback="handleClickHsk" />
          </div>
          <div class="hieroglyph-add-item">
            <div class="hieroglyph-add-item__errors">
              <span>{{ pinyinErrors[0] }}</span>
              <span>{{ hieroglyphErrors[0] }}</span>
            </div>
          </div>
          <div class="hieroglyph-add-item">
            <!-- <div class="hieroglyph-add-item__submit" :class="{ isDisabled: !hieroglyph || !pinyin }"> -->
            <div class="hieroglyph-add-item__submit">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { IRangeHsk, hskSlider, IPinyin } from "#/types"
import { matchChineseHieroglyph } from "#/utils"
import { Ref } from "vue"

//                                                                      //
const { $api } = useNuxtApp()

const pinyin: Ref<IPinyin | null> = ref(null)
const hieroglyph: Ref<string> = ref("")
const hsk: Ref<IRangeHsk> = ref(hskSlider[0])

const pinyinErrors: Ref<string[]> = ref([])
const hieroglyphErrors: Ref<string[]> = ref([])

const handleClickPinyin = (value: IPinyin) => (pinyin.value = value)
const handleClickHsk = (value: IRangeHsk) => (hsk.value = value)
const handleCheckForm = async () => {
  pinyinErrors.value = []
  hieroglyphErrors.value = []
  let isErrors = 0

  console.log("p - ", pinyin.value?.id, "h - ", hieroglyph.value)

  if (hieroglyph.value === "") {
    //& in real not needed
    hieroglyphErrors.value.push("Hieroglyph field empty")
    isErrors += 1
  } else if (!matchChineseHieroglyph(hieroglyph.value)) {
    //& in real not needed
    hieroglyphErrors.value.push("Not chinese hieroglyph")
    isErrors += 1
  } else {
    const isExist = await $api().hieroglyph.getByHieroglyph(hieroglyph.value)

    if (isExist.length > 0) {
      hieroglyphErrors.value.push("Hieroglyph is exist")
      isErrors += 1
    }
  }

  //& in real not needed
  if (pinyin.value === null) {
    pinyinErrors.value.push("Pinyin field empty")
    isErrors += 1
  }

  if (!isErrors) {
    try {
      const newHieroglyph = await $api().hieroglyph.add({
        hieroglyph: hieroglyph.value,
        pinyinId: pinyin.value.id,
        hsk: +hsk.value.value,
      })
      console.log("newHieroglyph", newHieroglyph)
    } catch (error) {
      console.log("error", error)
    }
  }
}

watchEffect(() => {
  hieroglyph.value
  hieroglyphErrors.value = []
})

definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.hieroglyph-add-fields {
  // background-color: var(--color-background-content);
  // box-shadow: 0 0 4px var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 150px;
  max-width: 200px;
  border-radius: 10px;
  padding: 5px 25px;

  &__pinyin {
    font-size: 2rem;
  }

  &__hieroglyph {
    font-size: 4rem;
    margin: 5px;
    font-weight: 500;
  }
}

.hieroglyph-add {
  display: flex;
  justify-content: space-between;

  align-items: flex-start;
  justify-content: center;

  flex-direction: row;
}

.hieroglyph-add-main {
  padding: 5px;
  max-width: 500px;
  width: 100%;
}

.hieroglyph-add-content {
  display: flex;
  flex-direction: column;
}

.hieroglyph-add-item {
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
</style>
