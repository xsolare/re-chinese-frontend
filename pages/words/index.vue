<template>
  <div class="words">
    <div class="words-content">
      <h1 class="words-content__header">Коллекции</h1>
      <div class="collection-list">
        <div v-for="arr in [...new Array(7)]" :key="arr" class="collection-list__item collection-item">
          <div class="collection-item__inner">
            <img
              class="collection-item__img"
              src="https://sun9-76.userapi.com/impf/p3gfrXdjYDnJgwpGkeItyQ7vfPXttVry46x73g/CPMeiskPK_U.jpg?size=1024x768&quality=96&sign=f88be99f56b4c49a10142965a4d25ba8&type=album"
            />
            <span class="collection-item__name">nice</span>
          </div>
        </div>
      </div>
    </div>
    <div class="words-content">
      <h1 class="words-content__header">Мои коллекции</h1>
      <div class="collection-list">
        <div v-for="arr in [...new Array(3)]" :key="arr" class="collection-list__item collection-item">
          <div class="collection-item__inner">
            <img
              class="collection-item__img"
              src="https://sun9-76.userapi.com/impf/p3gfrXdjYDnJgwpGkeItyQ7vfPXttVry46x73g/CPMeiskPK_U.jpg?size=1024x768&quality=96&sign=f88be99f56b4c49a10142965a4d25ba8&type=album"
            />
            <span class="collection-item__name">nice</span>
          </div>
        </div>
      </div>
    </div>
    <div class="words-control">
      <div class="words-control__selected selected-inner">
        <span class="selected-inner__none"
          >В связи с тем, что не выбрано ни одной категории, слова будут подбираться случайным образом</span
        >
      </div>
      <div class="words-control__mode mode-inner">
        <h1 class="mode-inner__header">Режимы</h1>
        <ul class="mode-inner__list">
          <li class="mode-inner__item">
            <button class="mode-inner__button">
              <span>Данетка</span>
            </button>
          </li>
          <li class="mode-inner__item">
            <button class="mode-inner__button">
              <span>С русского на китайский</span>
            </button>
          </li>
          <li class="mode-inner__item">
            <button class="mode-inner__button">
              <span>С китайского на русский</span>
            </button>
          </li>

          <li class="mode-inner__item" :class="{ active: true }">
            <button class="mode-inner__button">
              <span>Вопрос ответ</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="words-start">
        <NuxtLink to="/words/1" class="words-start__button">Начать</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'app',
})
</script>

<style lang="scss" scoped>
.words {
  max-width: 1000px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 5px;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.words-content {
  width: 100%;
  height: 100%;

  &__header {
    border-bottom: 2px solid var(--color-border);
    margin-top: 50px;
    font-size: 1em;
    height: 25px;
  }
}

.collection-list {
  display: flex;
  flex-basis: 500px;
  flex-wrap: wrap;
  flex-grow: 1;

  &__item {
    width: 33%;
    padding: 2px;
  }

  .collection-item {
    &__inner {
      background-color: var(--color-background-content);
      height: 100%;
      border-bottom: 1px solid var(--color-border);
      border-top: 1px solid var(--color-border);
      padding: 4px;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    &__img {
      object-fit: cover;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }

    &__name {
      font-size: 1em;
    }
  }
}

.words-control {
  margin-top: 50px;

  &__selected {
    .selected-inner {
      &__none {
        font-size: 1em;
        font-weight: 700;
      }
    }
  }

  &__mode {
    margin-top: 50px;

    .mode-inner {
      &__header {
        text-align: center;
        margin: 0 auto;
        width: 300px;
        font-size: 0.8em;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 900;
        border-bottom: 1px solid var(--color-border);
        height: 20px;
      }

      &__button {
        display: flex;
        flex-direction: row;

        color: var(--color-text);
        // background-color: var(--color-button-bg);
        // padding: 7px;
        // border-radius: 5px;

        // font-weight: 500;
      }

      &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      &__item {
        margin: 4px 0;
        width: 300px;

        display: flex;
        align-items: center;
        justify-content: center;

        &.active {
          border-left: 4px solid var(--color-highlight);
          border-right: 4px solid var(--color-highlight);
        }
      }
    }
  }
}

.words-start {
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  &__button {
    color: var(--color-text);
    background-color: var(--color-button-bg);
    padding: 7px;
    border-radius: 5px;
    font-weight: 500;
    width: 200px;
    text-decoration: none;
    text-align: center;

    // &:hover {
    // background-color: var(--color-button-bg-hover);
    // }
  }
}
</style>
