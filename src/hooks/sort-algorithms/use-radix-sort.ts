import { SORT_ANIMATION_SPEED_MS } from "@/constants"
import { SortFunction, sleep } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useRadixSort = ({ animationSpeedMs = SORT_ANIMATION_SPEED_MS }: SortHookProps) => {
  const radixSort: SortFunction = async ({
    numbers,
    setNumbers,
    setCurrentIndex,
    increaseComparisons,
    increaseSwaps,
    isSortingRef,
  }) => {
    const arr = [...numbers]
    const max = Math.max(...arr)

    // Do counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      if (!isSortingRef.current) return false

      const output = new Array(arr.length).fill(0)
      const count = new Array(10).fill(0)

      // Store count of occurrences
      for (let i = 0; i < arr.length; i++) {
        if (!isSortingRef.current) return false
        const digit = Math.floor(arr[i] / exp) % 10
        count[digit]++
        setCurrentIndex(i)
        await sleep(animationSpeedMs)
        increaseComparisons()
      }

      // Change count[i] so that count[i] contains actual
      // position of this digit in output[]
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1]
      }

      // Build the output array
      for (let i = arr.length - 1; i >= 0; i--) {
        if (!isSortingRef.current) return false
        const digit = Math.floor(arr[i] / exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit]--
        increaseSwaps()
      }

      // Copy the output array to arr[]
      for (let i = 0; i < arr.length; i++) {
        if (!isSortingRef.current) return false
        arr[i] = output[i]
        setNumbers([...arr])
        setCurrentIndex(i)
        await sleep(animationSpeedMs)
      }
    }

    return true
  }

  return radixSort
}
