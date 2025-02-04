import { ANIMATION_SPEED_MS, SortFunction, sleep } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useCocktailSort = ({ animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const cocktailSort: SortFunction = async ({
    numbers,
    setNumbers,
    setCurrentIndex,
    setComparingIndex,
    setComparisons,
    setSwaps,
    isSortingRef,
  }) => {
    const arr = [...numbers]
    let start = 0
    let end = arr.length - 1
    let swapped = true

    while (swapped) {
      if (!isSortingRef.current) return
      swapped = false

      // Forward pass (left to right)
      for (let i = start; i < end; i++) {
        if (!isSortingRef.current) return
        setCurrentIndex(i)
        setComparingIndex(i + 1)
        await sleep(animationSpeedMs)

        setComparisons(prev => prev + 1)
        if (arr[i] > arr[i + 1]) {
          ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
          setSwaps(prev => prev + 1)
          setNumbers([...arr])
          swapped = true
        }
      }

      if (!swapped) break

      swapped = false
      end--

      // Backward pass (right to left)
      for (let i = end - 1; i >= start; i--) {
        if (!isSortingRef.current) return
        setCurrentIndex(i)
        setComparingIndex(i + 1)
        await sleep(animationSpeedMs)

        setComparisons(prev => prev + 1)
        if (arr[i] > arr[i + 1]) {
          ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
          setSwaps(prev => prev + 1)
          setNumbers([...arr])
          swapped = true
        }
      }

      start++
    }
  }

  return cocktailSort
}
