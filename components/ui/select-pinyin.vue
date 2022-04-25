<template>
  <div class="form-group" :class="type">
    <label class="form-group__label">Pinyin</label>
    <button :class="{ error: error }" class="form-group__select">shi</button>
    <span class="form-group__stroke" />
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue"
import { HieroglyphApi } from "../../utils/api/hieroglyph"

const handleUpdate = () => {
  console.log("afs")
}

defineProps({
  input: {
    type: Object as PropType<any>,
    required: false,
  },
  type: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  error: {
    type: Object as PropType<any>,
    required: false,
  },
})
defineEmits(["update:input"])
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
    font-size: 1.5rem;
    display: flex;
    min-height: 30px;
    cursor: pointer;

    &.Error {
      outline: 1px solid var(--color-error);
    }

    transition: all 0.2s ease-out;
  }

  &__label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
  }

  &__stroke {
    width: 100%;
    height: 2px;
    background-color: var(--color-border);

    &.Active {
      background-color: var(--color-highlight);
    }
  }
}
</style>
