export type SortFunction = (
  arr: number[],
  setNumbers: (numbers: number[]) => void,
  setCurrentIndex: (index: number) => void,
  setComparingIndex: (index: number) => void,
) => Promise<void>

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const ANIMATION_SPEED_MS = 10
