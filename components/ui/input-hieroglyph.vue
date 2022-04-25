<template>
  <div class="form-group" :class="type">
    <label class="form-group__label">Hieroglyph</label>
    <input
      :name="name"
      :type="type"
      :class="{ error: error }"
      :value="input"
      @input="$emit('update:input', $event.target?.value || '')"
      class="form-group__input"
      maxlength="1" />
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

  &__input {
    text-align: center;
    font-size: 1rem;
    display: flex;

    padding: 0 10px;
    margin: 0;

    width: 70px;
    height: 70px;
    font-size: 2rem;

    // background-color: var(--color-background-content);
    border: 0px;
    cursor: pointer;

    border-radius: 5px;

    z-index: 1;

    color: var(--color-text);
    outline: 1px solid var(--color-border);

    border-bottom: 2px solid transparent;

    &.Error {
      outline: 1px solid var(--color-error);
    }

    &:hover {
      cursor: text;
      border-bottom: 2px solid var(--color-highlight);
      transition: all 0.2s ease-in;
    }

    &:focus {
      cursor: text;
      border-bottom: 2px solid var(--color-highlight);
      transition: all 0.2s ease-in;
    }
    transition: all 0.2s ease-out;
  }

  &__label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}
</style>
