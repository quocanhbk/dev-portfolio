import { SORT_ALGORITHMS } from "@/constants"

export interface SortFunctionParams {
  numbers: number[]
  setNumbers: (numbers: number[]) => void
  setCurrentIndex: (index: number) => void
  setComparingIndex: (index: number) => void
  increaseComparisons: () => void
  increaseSwaps: () => void
  isSortingRef: { current: boolean }
}

export type SortFunction = (params: SortFunctionParams) => Promise<boolean>

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


export type SortAlgorithm = (typeof SORT_ALGORITHMS)[number]["value"]
