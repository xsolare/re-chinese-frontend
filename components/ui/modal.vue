<template>
  <teleport to="body">
    <transition @click.stop="callback" class="modal" name="modal">
      <slot />
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { PropType } from "vue"

defineProps({
  callback: {
    type: Function as PropType<() => void>,
    required: false,
  },
})
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(24, 24, 24, 0.7);
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
