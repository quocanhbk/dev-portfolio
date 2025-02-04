import { ANIMATION_SPEED_MS, SortFunction, sleep } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useHeapSort = ({ animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const heapify = async (
    arr: number[],
    n: number,
    i: number,
    setNumbers: (numbers: number[]) => void,
    setCurrentIndex: (index: number) => void,
    setComparingIndex: (index: number) => void,
    setComparisons: (cb: (prev: number) => number) => void,
    setSwaps: (cb: (prev: number) => number) => void,
    isSortingRef: { current: boolean },
  ) => {
    if (!isSortingRef.current) return

    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    setCurrentIndex(i)
    await sleep(animationSpeedMs)

    // Compare with left child
    if (left < n) {
      setComparingIndex(left)
      await sleep(animationSpeedMs)
      setComparisons(prev => prev + 1)
      if (arr[left] > arr[largest]) {
        largest = left
      }
    }

    // Compare with right child
    if (right < n) {
      setComparingIndex(right)
      await sleep(animationSpeedMs)
      setComparisons(prev => prev + 1)
      if (arr[right] > arr[largest]) {
        largest = right
      }
    }

    // If largest is not root
    if (largest !== i) {
      ;[arr[i], arr[largest]] = [arr[largest], arr[i]]
      setSwaps(prev => prev + 1)
      setNumbers([...arr])

      // Recursively heapify the affected sub-tree
      await heapify(
        arr,
        n,
        largest,
        setNumbers,
        setCurrentIndex,
        setComparingIndex,
        setComparisons,
        setSwaps,
        isSortingRef,
      )
    }
  }

  const heapSort: SortFunction = async ({
    numbers,
    setNumbers,
    setCurrentIndex,
    setComparingIndex,
    setComparisons,
    setSwaps,
    isSortingRef,
  }) => {
    const arr = [...numbers]
    const n = arr.length

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      if (!isSortingRef.current) return
      await heapify(arr, n, i, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps, isSortingRef)
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
      if (!isSortingRef.current) return // Move current root to end
      ;[arr[0], arr[i]] = [arr[i], arr[0]]
      setSwaps(prev => prev + 1)
      setNumbers([...arr])

      // Heapify reduced heap
      await heapify(arr, i, 0, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps, isSortingRef)
    }
  }

  return heapSort
}
