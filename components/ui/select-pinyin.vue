<template>
  <div class="form-group">
    <label class="form-group__label">Pinyin</label>
    <button @click="handleClickPinyin" class="form-group__select">
      {{ value?.pinyin ? value.pinyin : "Select" }}
    </button>
  </div>
  <UiModal :callback="() => (isShowed = false)">
    <PinyinTable v-if="isShowed" :callback="callback" />
  </UiModal>
</template>

<script lang="ts" setup>
import { IPinyin } from "#/types"
import { PropType, Ref } from "vue"

const isShowed: Ref<boolean> = ref(false)
const handleClickPinyin = () => (isShowed.value = true)

watchEffect(() => {
  props.value
  isShowed.value = false
})

useRouter().beforeEach((to, from) => {
  if (isShowed.value) {
    isShowed.value = false
    return false
  }

  return true
})

const props = defineProps({
  value: {
    type: Object as PropType<IPinyin>,
    required: true,
  },
  callback: {
    type: Function as PropType<(pinyin: IPinyin) => void>,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.form-group {
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 0;
  width: 100%;

  &__select {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 30px;
    background-color: var(--color-background-content);
    border-radius: 25px;
    padding: 0px 15px;
    cursor: pointer;

    outline: 2px solid var(--color-background-content);
    &.Error {
      outline: 2px solid var(--color-error);
    }

    transition: outline 0.2s ease-out;
  }

  &__label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
  }
}
</style>
