import { ANIMATION_SPEED_MS, SortFunction, sleep } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useCocktailSort = ({ animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const cocktailSort: SortFunction = async ({
    numbers,
    setNumbers,
    setCurrentIndex,
    setComparingIndex,
    increaseComparisons,
    increaseSwaps,
    isSortingRef,
  }) => {
    const arr = [...numbers]
    let start = 0
    let end = arr.length - 1
    let swapped = true

    while (swapped) {
      if (!isSortingRef.current) return false
      swapped = false

      // Forward pass (left to right)
      for (let i = start; i < end; i++) {
        if (!isSortingRef.current) return false
        setCurrentIndex(i)
        setComparingIndex(i + 1)
        await sleep(animationSpeedMs)

        increaseComparisons()
        if (arr[i] > arr[i + 1]) {
          ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
          increaseSwaps()
          setNumbers([...arr])
          swapped = true
        }
      }

      if (!swapped) break

      swapped = false
      end--

      // Backward pass (right to left)
      for (let i = end - 1; i >= start; i--) {
        if (!isSortingRef.current) return false
        setCurrentIndex(i)
        setComparingIndex(i + 1)
        await sleep(animationSpeedMs)

        increaseComparisons()
        if (arr[i] > arr[i + 1]) {
          ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
          increaseSwaps()
          setNumbers([...arr])
          swapped = true
        }
      }

      start++
    }

    return true
  }

  return cocktailSort
}
