export interface SortFunctionParams {
  numbers: number[]
  setNumbers: (numbers: number[]) => void
  setCurrentIndex: (index: number) => void
  setComparingIndex: (index: number) => void
  setComparisons: (value: number | ((prev: number) => number)) => void
  setSwaps: (value: number | ((prev: number) => number)) => void
  isSortingRef: { current: boolean }
}

export type SortFunction = (params: SortFunctionParams) => Promise<void>

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const ANIMATION_SPEED_MS = 10
