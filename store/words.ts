import { defineStore } from 'pinia'
import { ApiStatus } from '../types'
import { ICurrentWord, IWord, IWordSetting, WordsState } from 'types/store'
import { useProgressTaskStore } from './progress-task'

//* =======================================================================================
//* Words store
//* =======================================================================================

export const useWordsStore = defineStore('words', {
  state: () =>
    ({
      loadStatus: ApiStatus.NONE,

      words: [],
      submitedWords: [],
      currentWord: {} as ICurrentWord,
      settings: {} as IWordSetting,

      isPinyi: false,
      isAnswered: false,

      errors: [],
    } as WordsState),
  getters: {
    unCompletedWords: (state): IWord[] => {
      const usedWords = !state.submitedWords.length
        ? []
        : state.settings.re
        ? state.submitedWords.filter((x) => x.correct).map((x) => x.word)
        : state.submitedWords.map((x) => x.word)

      return state.words.filter((x) => usedWords.find((y) => y.id === x.id)?.id === undefined) as IWord[]
    },
    getNextWord(state): number {
      const words: IWord[] = state.settings.random
        ? this.unCompletedWords.filter((x) => x.id !== state.currentWord.word.id)
        : this.unCompletedWords

      if (state.settings.random) return words[Math.floor(Math.random() * (words.length - 1))].id
      else {
        const index = words.map((x) => x.id).indexOf(state.currentWord.word.id)

        if (index === words.length - 1) return words[0].id
        else return words[index + 1].id
      }
    },
    countCompleted(state): number {
      return state.words.length - this.unCompletedWords.length
    },
  },
  actions: {
    validateAnswer(word?: IWord) {
      const isCorrect: boolean = !word ? false : this.currentWord.word.id === word.id

      this.submitedWords.push({
        typeQuestion: this.currentWord.typeQuestion,
        word: this.currentWord.word,
        answer: word,
        correct: isCorrect,
      })

      useProgressTaskStore().submitTask(this.currentWord.word.id, isCorrect)
    },

    nextWord() {
      this.isAnswered = false
      this.isPinyi = false

      this.currentWord = {
        typeQuestion: this.settings.typesQuestion[Math.floor(Math.random() * (this.settings.typesQuestion.length - 1))],
        word: this.words.find((x) => x.id === this.getNextWord),
      }
    },
  },
})
