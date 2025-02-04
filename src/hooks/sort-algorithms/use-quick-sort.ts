import { ANIMATION_SPEED_MS, sleep, SortFunction } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useQuickSort = ({ animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const partition = async (
    arr: number[],
    low: number,
    high: number,
    setNumbers: (numbers: number[]) => void,
    setCurrentIndex: (index: number) => void,
    setComparingIndex: (index: number) => void,
    increaseComparisons: () => void,
    increaseSwaps: () => void,
    isSortingRef: { current: boolean },
  ) => {
    const pivot = arr[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
      if (!isSortingRef.current) return -1

      setCurrentIndex(j)
      setComparingIndex(high)
      await sleep(animationSpeedMs)

      increaseComparisons()
      if (arr[j] < pivot) {
        i++
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        increaseSwaps()
        setNumbers([...arr])
      }
    }

    if (i + 1 !== high) {
      ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
      increaseSwaps()
      setNumbers([...arr])
    }
    return i + 1
  }

  const quickSortHelper = async (
    arr: number[],
    low: number,
    high: number,
    setNumbers: (numbers: number[]) => void,
    setCurrentIndex: (index: number) => void,
    setComparingIndex: (index: number) => void,
    increaseComparisons: () => void,
    increaseSwaps: () => void,
    isSortingRef: { current: boolean },
  ) => {
    if (low < high) {
      if (!isSortingRef.current) return false

      const pi = await partition(
        arr,
        low,
        high,
        setNumbers,
        setCurrentIndex,
        setComparingIndex,
        increaseComparisons,
        increaseSwaps,
        isSortingRef,
      )
      if (pi === -1) return false
      await quickSortHelper(
        arr,
        low,
        pi - 1,
        setNumbers,
        setCurrentIndex,
        setComparingIndex,
        increaseComparisons,
        increaseSwaps,
        isSortingRef,
      )
      await quickSortHelper(
        arr,
        pi + 1,
        high,
        setNumbers,
        setCurrentIndex,
        setComparingIndex,
        increaseComparisons,
        increaseSwaps,
        isSortingRef,
      )
    }

    return true
  }

  const quickSort: SortFunction = async ({
    numbers,
    setNumbers,
    setCurrentIndex,
    setComparingIndex,
    increaseComparisons,
    increaseSwaps,
    isSortingRef,
  }) => {
    const arr = [...numbers]
    return await quickSortHelper(
      arr,
      0,
      arr.length - 1,
      setNumbers,
      setCurrentIndex,
      setComparingIndex,
      increaseComparisons,
      increaseSwaps,
      isSortingRef,
    )
  }

  return quickSort
}
