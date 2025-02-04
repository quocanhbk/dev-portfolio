import { SORT_ANIMATION_SPEED_MS } from "@/constants"
import { sleep, SortFunction } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useMergeSort = ({ animationSpeedMs = SORT_ANIMATION_SPEED_MS }: SortHookProps) => {
  const merge = async (
    arr: number[],
    left: number,
    middle: number,
    right: number,
    setNumbers: (numbers: number[]) => void,
    setCurrentIndex: (index: number) => void,
    setComparingIndex: (index: number) => void,
    increaseComparisons: () => void,
    increaseSwaps: () => void,
    isSortingRef: { current: boolean },
  ) => {
    const n1 = middle - left + 1
    const n2 = right - middle

    const L = arr.slice(left, middle + 1)
    const R = arr.slice(middle + 1, right + 1)

    let i = 0
    let j = 0
    let k = left

    while (i < n1 && j < n2) {
      if (!isSortingRef.current) return false

      setCurrentIndex(left + i)
      setComparingIndex(middle + 1 + j)
      await sleep(animationSpeedMs)

      increaseComparisons()
      if (L[i] <= R[j]) {
        if (arr[k] !== L[i]) {
          arr[k] = L[i]
          increaseSwaps()
          setNumbers([...arr])
        }
        i++
      } else {
        if (arr[k] !== R[j]) {
          arr[k] = R[j]
          increaseSwaps()
          setNumbers([...arr])
        }
        j++
      }
      k++
    }

    while (i < n1) {
      if (!isSortingRef.current) return false
      if (arr[k] !== L[i]) {
        arr[k] = L[i]
        increaseSwaps()
        setNumbers([...arr])
      }
      i++
      k++
    }

    while (j < n2) {
      if (!isSortingRef.current) return false
      if (arr[k] !== R[j]) {
        arr[k] = R[j]
        increaseSwaps()
        setNumbers([...arr])
      }
      j++
      k++
    }

    return true
  }

  const mergeSortHelper = async (
    arr: number[],
    left: number,
    right: number,
    setNumbers: (numbers: number[]) => void,
    setCurrentIndex: (index: number) => void,
    setComparingIndex: (index: number) => void,
    increaseComparisons: () => void,
    increaseSwaps: () => void,
    isSortingRef: { current: boolean },
  ) => {
    if (left < right) {
      if (!isSortingRef.current) return false

      const middle = Math.floor((left + right) / 2)

      await mergeSortHelper(
        arr,
        left,
        middle,
        setNumbers,
        setCurrentIndex,
        setComparingIndex,
        increaseComparisons,
        increaseSwaps,
        isSortingRef,
      )
      await mergeSortHelper(
        arr,
        middle + 1,
        right,
        setNumbers,
        setCurrentIndex,
        setComparingIndex,
        increaseComparisons,
        increaseSwaps,
        isSortingRef,
      )
      return await merge(
        arr,
        left,
        middle,
        right,
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

  const mergeSort: SortFunction = async ({
    numbers,
    setNumbers,
    setCurrentIndex,
    setComparingIndex,
    increaseComparisons,
    increaseSwaps,
    isSortingRef,
  }) => {
    const arr = [...numbers]
    return await mergeSortHelper(
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

  return mergeSort
}
