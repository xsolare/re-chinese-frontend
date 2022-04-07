<template>
  <NuxtLayout name="hieroglyph">
    <div>ALL</div>

    <div></div>
    <div class="hieroglyph-list">
      <div v-for="item in [...Array(10)]" :key="item" class="hieroglyph-item">
        <div class="hieroglyph-item__inner">
          <div class="hieroglyph-description">
            <div>qu</div>
            <div>去</div>
            <div>идти</div>
          </div>
          <!-- <hr class="hieroglyph-hr" />
          <div class="hieroglyph-info">
            <div>гл</div>
            <div>-</div>
            <div>3</div>
          </div> -->
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts">
definePageMeta({
  layout: "app",
})
</script>

<style lang="scss" scoped>
.hieroglyph-list {
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.hieroglyph-item {
  margin: 5px;
  min-width: 75px;
  max-width: 150px;
  cursor: pointer;

  &__inner {
    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: var(--color-background-content);
    border-radius: 10px;
    width: 100%;
    overflow: hidden;
    padding: 5px;
  }
}

.hieroglyph-description {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.hieroglyph-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  font-size: 14px;
  width: 100%;
  padding: 0 10px;
}

.hieroglyph-hr {
  height: 1px;
  margin: 0;
  color: rgba(0, 0, 0, 0.55);
  width: 90%;
}
</style>
