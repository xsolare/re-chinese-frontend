<template>
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="M3 18V16H21V18ZM3 13V11H21V13ZM3 8V6H21V8Z" />
  </svg>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.icon {
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
