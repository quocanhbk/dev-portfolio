import { SORT_ANIMATION_SPEED_MS } from "@/constants"
import { SortFunction, sleep } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useShellSort = ({ animationSpeedMs = SORT_ANIMATION_SPEED_MS }: SortHookProps) => {
  const shellSort: SortFunction = async ({
    numbers,
    setNumbers,
    setCurrentIndex,
    setComparingIndex,
    increaseComparisons,
    increaseSwaps,
    isSortingRef,
  }) => {
    const arr = [...numbers]
    const n = arr.length

    // Start with a large gap and reduce it in each iteration
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      // Perform insertion sort for elements at current gap
      for (let i = gap; i < n; i++) {
        if (!isSortingRef.current) return false

        const temp = arr[i]
        let j = i

        setCurrentIndex(i)
        setComparingIndex(j - gap)
        await sleep(animationSpeedMs)

        // Shift elements until the correct position is found
        while (j >= gap && arr[j - gap] > temp) {
          if (!isSortingRef.current) return false

          increaseComparisons()
          arr[j] = arr[j - gap]
          increaseSwaps()
          setNumbers([...arr])

          j -= gap
          if (j >= gap) {
            setCurrentIndex(j)
            setComparingIndex(j - gap)
            await sleep(animationSpeedMs)
          }
        }

        arr[j] = temp
        setNumbers([...arr])
      }
    }

    return true
  }

  return shellSort
}
