<template>
  <svg class="add" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path
      d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.add {
  fill: var(--color-text);
  height: 26px;
  width: 26px;

  &:hover {
    transform-origin: 0 0 0 0;
    transform: scale(1.25);
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>
