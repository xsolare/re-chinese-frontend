<template>
  <div class="words-layout">
    <div class="words-layout__header header-content">
      <div class="header-content__progress progress-content">
        <div class="progress-content__bar">
          <span
            class="progress-content__item"
            :key="task.id"
            v-for="task in progressTaskStore.statusTasks"
            :class="{ true: task.isCorrect, false: !task.isCorrect }" />
          <span
            class="progress-content__item"
            :key="empty"
            v-for="empty in progressTaskStore.count - progressTaskStore.statusTasks.length" />
        </div>
        <div class="progress-content__complete">
          <span>{{ wordsStore.countCompleted }}</span>
          <span> / </span>
          <span>{{ wordsStore.words.length }}</span>
        </div>
      </div>
      <button @click="handleClickClose" class="header-content__button header-content__button_left">
        <IconsClose />
      </button>
      <button @click="handleClickPinyin" class="header-content__button header-content__button_right">
        <IconsTranslate />
      </button>
    </div>

    <main class="words-layout__main">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useWordsStore, useProgressTaskStore } from "../store"

const wordsStore = useWordsStore()
const progressTaskStore = useProgressTaskStore()

const router = useRouter()

// console.log('a', progressTaskStore.empty)

const handleClickClose = () => router.push("/")

// TODO global pinyin
const handleClickPinyin = () => wordsStore.$patch({ isPinyi: !wordsStore.isPinyi })
</script>

<style scoped lang="scss">
.words-layout {
  user-select: none;
  &__header {
    position: fixed;
    overflow: hidden;
    height: var(--header-task-height);
    width: 100%;
    z-index: 15;

    .header-content {
      width: 100%;
      z-index: 15;

      &__progress {
        display: flex;
        flex-direction: column;
        margin: 0 50px;

        .progress-content {
          &__bar {
            height: 4px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1px;
            opacity: 0.5;
          }

          &__item {
            background-color: var(--color-border);
            border-bottom: 1px solid transparent;
            height: 4px;
            width: 100%;
            &.true {
              height: 5px;
              background-color: var(--color-yes-bg);
            }
            &.false {
              height: 5px;
              background-color: var(--color-no-bg);
            }
          }

          &__complete {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            gap: 5px;
            color: var(--color-sub-text);
          }
        }
      }

      &__button {
        position: absolute;

        height: 100px;
        width: 100px;

        background-color: var(--color-header-bg);
        border-radius: 50%;

        cursor: pointer;

        border: 1px solid transparent;

        &:hover {
          box-shadow: 0 0 5px var(--color-highlight);
          border: 1px solid var(--color-highlight);
          transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        transition: all 0.2s ease-out;

        svg {
          position: absolute;

          width: 30px;
          height: 30px;
          fill: var(--color-header);
        }

        &_left {
          top: -50px;
          left: -50px;

          svg {
            bottom: 15px;
            right: 15px;
          }
        }

        &_right {
          top: -50px;
          right: -50px;

          svg {
            bottom: 15px;
            left: 15px;
          }
        }
      }
    }
  }

  &__main {
    position: relative;

    width: 100%;
    z-index: 10;

    padding-top: var(--header-task-height);
    min-height: calc(100vh - var(--footer-height));
    height: 100%;
  }
}
</style>
