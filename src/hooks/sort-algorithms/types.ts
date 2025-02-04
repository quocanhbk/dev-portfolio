export type SortFunctionArgs = {
  numbers: number[]
  setNumbers: (numbers: number[]) => void
  setCurrentIndex: (index: number) => void
  setComparingIndex: (index: number) => void
}

export type SortFunction = (args: SortFunctionArgs) => Promise<void>

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const ANIMATION_SPEED_MS = 10
