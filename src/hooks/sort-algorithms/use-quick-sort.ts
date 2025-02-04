import { useCallback } from "react"
import { ANIMATION_SPEED_MS, sleep, SortFunction } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useQuickSort = ({ isSortingRef, animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const partition = useCallback(
    async (
      arr: number[],
      low: number,
      high: number,
      setNumbers: (numbers: number[]) => void,
      setCurrentIndex: (index: number) => void,
      setComparingIndex: (index: number) => void,
      isSorting: boolean,
    ) => {
      const pivot = arr[high]
      let i = low - 1

      for (let j = low; j < high; j++) {
        if (!isSorting) return -1

        setCurrentIndex(j)
        setComparingIndex(high) // pivot
        await sleep(animationSpeedMs)

        if (arr[j] < pivot) {
          i++
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
          setNumbers([...arr])
        }
      }

      ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
      setNumbers([...arr])
      return i + 1
    },
    [animationSpeedMs],
  )

  const quickSortHelper = useCallback(
    async (
      arr: number[],
      low: number,
      high: number,
      setNumbers: (numbers: number[]) => void,
      setCurrentIndex: (index: number) => void,
      setComparingIndex: (index: number) => void,
      isSorting: boolean,
    ) => {
      if (low < high && isSorting) {
        const pi = await partition(arr, low, high, setNumbers, setCurrentIndex, setComparingIndex, isSorting)
        if (pi === -1) return // sorting was cancelled
        await quickSortHelper(arr, low, pi - 1, setNumbers, setCurrentIndex, setComparingIndex, isSorting)
        await quickSortHelper(arr, pi + 1, high, setNumbers, setCurrentIndex, setComparingIndex, isSorting)
      }
    },
    [partition],
  )

  const quickSort: SortFunction = useCallback(
    async (numbers, setNumbers, setCurrentIndex, setComparingIndex) => {
      const arr = [...numbers]
      await quickSortHelper(
        arr,
        0,
        arr.length - 1,
        setNumbers,
        setCurrentIndex,
        setComparingIndex,
        isSortingRef.current,
      )
    },
    [isSortingRef, quickSortHelper],
  )

  return quickSort
}
