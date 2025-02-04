import { SORT_ANIMATION_SPEED_MS } from "@/constants"
import { SortFunction, sleep } from "./types"

export interface SortHookProps {
  animationSpeedMs?: number
}

export const useBubbleSort = ({ animationSpeedMs = SORT_ANIMATION_SPEED_MS }: SortHookProps) => {
  const bubbleSort: SortFunction = async ({
    numbers,
    setNumbers,
    setCurrentIndex,
    setComparingIndex,
    increaseComparisons,
    increaseSwaps,
    isSortingRef,
  }) => {
    const arr = [...numbers]
    const n = arr.length

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isSortingRef.current) return false

        setCurrentIndex(j)
        setComparingIndex(j + 1)
        await sleep(animationSpeedMs)

        increaseComparisons()
        if (arr[j] > arr[j + 1]) {
          ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          increaseSwaps()
          setNumbers([...arr])
        }
      }
    }

    return true
  }

  return bubbleSort
}
