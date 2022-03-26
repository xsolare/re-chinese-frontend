//* State
export interface ProgressTask {
  count: number
  statusTasks: IStatusTask[]
  currentTaskId: number | null
}

//* Interfaces
export interface IStatusTask {
  id: number
  isCorrect: boolean
}
