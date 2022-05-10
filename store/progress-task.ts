import { defineStore } from "pinia"
import { ProgressTask } from "types/store"

//* =======================================================================================
//* Progress task store
//* =======================================================================================

export const useProgressTaskStore = defineStore("progressTask", {
  state: () =>
    ({
      count: 0,
      statusTasks: [],
      currentTaskId: null,
    } as ProgressTask),
  getters: {
    // empty: (state) => {
    //   return state.count
    // },
  },
  actions: {
    submitTask(id: number, isCorrect: boolean) {
      const isExist = this.statusTasks.length === 0 ? false : this.statusTasks.find((x) => x.id === id) != undefined

      if (!isExist) this.statusTasks.push({ id, isCorrect })
      else {
        this.statusTasks = this.statusTasks.map((x) => {
          if (x.id === id) x.isCorrect = isCorrect

          return x
        })
      }
    },
  },
})
