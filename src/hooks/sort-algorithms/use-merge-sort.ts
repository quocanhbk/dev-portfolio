import { useCallback } from "react"
import { ANIMATION_SPEED_MS, sleep, SortFunction } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useMergeSort = ({ isSortingRef, animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const merge = useCallback(
    async (
      arr: number[],
      left: number,
      middle: number,
      right: number,
      setNumbers: (numbers: number[]) => void,
      setCurrentIndex: (index: number) => void,
      setComparingIndex: (index: number) => void,
      isSorting: boolean,
    ) => {
      const n1 = middle - left + 1
      const n2 = right - middle

      const L = arr.slice(left, middle + 1)
      const R = arr.slice(middle + 1, right + 1)

      let i = 0
      let j = 0
      let k = left

      while (i < n1 && j < n2) {
        if (!isSorting) return

        setCurrentIndex(left + i)
        setComparingIndex(middle + 1 + j)
        await sleep(animationSpeedMs)

        if (L[i] <= R[j]) {
          arr[k] = L[i]
          i++
        } else {
          arr[k] = R[j]
          j++
        }
        setNumbers([...arr])
        k++
      }

      while (i < n1) {
        if (!isSorting) return
        arr[k] = L[i]
        setNumbers([...arr])
        i++
        k++
      }

      while (j < n2) {
        if (!isSorting) return
        arr[k] = R[j]
        setNumbers([...arr])
        j++
        k++
      }
    },
    [animationSpeedMs],
  )

  const mergeSortHelper = useCallback(
    async (
      arr: number[],
      left: number,
      right: number,
      setNumbers: (numbers: number[]) => void,
      setCurrentIndex: (index: number) => void,
      setComparingIndex: (index: number) => void,
      isSorting: boolean,
    ) => {
      if (left < right && isSorting) {
        const middle = Math.floor((left + right) / 2)

        await mergeSortHelper(arr, left, middle, setNumbers, setCurrentIndex, setComparingIndex, isSorting)
        await mergeSortHelper(arr, middle + 1, right, setNumbers, setCurrentIndex, setComparingIndex, isSorting)
        await merge(arr, left, middle, right, setNumbers, setCurrentIndex, setComparingIndex, isSorting)
      }
    },
    [merge],
  )

  const mergeSort: SortFunction = useCallback(
    async ({ numbers, setNumbers, setCurrentIndex, setComparingIndex }) => {
      const arr = [...numbers]
      await mergeSortHelper(
        arr,
        0,
        arr.length - 1,
        setNumbers,
        setCurrentIndex,
        setComparingIndex,
        isSortingRef.current,
      )
    },
    [isSortingRef, mergeSortHelper],
  )

  return mergeSort
}
