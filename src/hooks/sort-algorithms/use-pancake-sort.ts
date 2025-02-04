import { ANIMATION_SPEED_MS, SortFunction, sleep } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const usePancakeSort = ({ animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const flip = async (
    arr: number[],
    k: number,
    setNumbers: (numbers: number[]) => void,
    setSwaps: (cb: (prev: number) => number) => void,
    isSortingRef: { current: boolean },
  ) => {
    let left = 0
    let right = k

    while (left < right) {
      if (!isSortingRef.current) return
      ;[arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
      setSwaps(prev => prev + 1)
      setNumbers([...arr])
    }
  }

  const findMax = (arr: number[], k: number, setComparisons: (cb: (prev: number) => number) => void) => {
    let maxIndex = 0
    for (let i = 0; i <= k; i++) {
      setComparisons(prev => prev + 1)
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i
      }
    }
    return maxIndex
  }

  const pancakeSort: SortFunction = async ({
    numbers,
    setNumbers,
    setCurrentIndex,
    setComparingIndex,
    setComparisons,
    setSwaps,
    isSortingRef,
  }) => {
    const arr = [...numbers]

    for (let i = arr.length - 1; i > 0; i--) {
      if (!isSortingRef.current) return

      setCurrentIndex(i)
      await sleep(animationSpeedMs)

      // Find the maximum element in arr[0..i]
      const maxIndex = findMax(arr, i, setComparisons)
      setComparingIndex(maxIndex)

      if (maxIndex !== i) {
        // Flip the array to bring max element to beginning
        if (maxIndex !== 0) {
          await flip(arr, maxIndex, setNumbers, setSwaps, isSortingRef)
          await sleep(animationSpeedMs)
        }
        // Flip the array to bring max element to its correct position
        await flip(arr, i, setNumbers, setSwaps, isSortingRef)
        await sleep(animationSpeedMs)
      }
    }
  }

  return pancakeSort
}
