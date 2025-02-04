import { ANIMATION_SPEED_MS, SortFunction, sleep } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useInsertionSort = ({ animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const insertionSort: SortFunction = async ({
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

    for (let i = 1; i < n; i++) {
      const key = arr[i]
      let j = i - 1

      setCurrentIndex(i)
      await sleep(animationSpeedMs)

      while (j >= 0) {
        if (!isSortingRef.current) return

        setComparingIndex(j)
        await sleep(animationSpeedMs)

        increaseComparisons()
        if (arr[j] > key) {
          arr[j + 1] = arr[j]
          increaseSwaps()
          setNumbers([...arr])
          j--
        } else {
          break
        }
      }

      if (j + 1 !== i) {
        arr[j + 1] = key
        increaseSwaps()
        setNumbers([...arr])
      }
    }
  }

  return insertionSort
}
