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
      setComparisons: (value: number | ((prev: number) => number)) => void,
      setSwaps: (value: number | ((prev: number) => number)) => void,
    ) => {
      const pivot = arr[high]
      let i = low - 1

      for (let j = low; j < high; j++) {
        if (!isSortingRef.current) return -1

        setCurrentIndex(j)
        setComparingIndex(high)
        await sleep(animationSpeedMs)

        setComparisons(prev => prev + 1)
        if (arr[j] < pivot) {
          i++
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
          setSwaps(prev => prev + 1)
          setNumbers([...arr])
        }
      }

      if (i + 1 !== high) {
        ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
        setSwaps(prev => prev + 1)
        setNumbers([...arr])
      }
      return i + 1
    },
    [animationSpeedMs, isSortingRef],
  )

  const quickSortHelper = useCallback(
    async (
      arr: number[],
      low: number,
      high: number,
      setNumbers: (numbers: number[]) => void,
      setCurrentIndex: (index: number) => void,
      setComparingIndex: (index: number) => void,
      setComparisons: (value: number | ((prev: number) => number)) => void,
      setSwaps: (value: number | ((prev: number) => number)) => void,
    ) => {
      if (low < high && isSortingRef.current) {
        const pi = await partition(
          arr,
          low,
          high,
          setNumbers,
          setCurrentIndex,
          setComparingIndex,
          setComparisons,
          setSwaps,
        )
        if (pi === -1) return // sorting was cancelled
        await quickSortHelper(
          arr,
          low,
          pi - 1,
          setNumbers,
          setCurrentIndex,
          setComparingIndex,
          setComparisons,
          setSwaps,
        )
        await quickSortHelper(
          arr,
          pi + 1,
          high,
          setNumbers,
          setCurrentIndex,
          setComparingIndex,
          setComparisons,
          setSwaps,
        )
      }
    },
    [partition],
  )

  const quickSort: SortFunction = useCallback(
    async ({ numbers, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps }) => {
      const arr = [...numbers]
      await quickSortHelper(
        arr,
        0,
        arr.length - 1,
        setNumbers,
        setCurrentIndex,
        setComparingIndex,
        setComparisons,
        setSwaps,
      )
    },
    [quickSortHelper],
  )

  return quickSort
}
