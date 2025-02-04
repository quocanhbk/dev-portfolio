import { useCallback } from "react"
import { ANIMATION_SPEED_MS, SortFunction, sleep } from "./types"
import { SortHookProps } from "./use-bubble-sort"

export const useInsertionSort = ({ isSortingRef, animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const insertionSort: SortFunction = useCallback(
    async (numbers, setNumbers, setCurrentIndex, setComparingIndex) => {
      const arr = [...numbers]
      const n = arr.length

      for (let i = 1; i < n; i++) {
        const key = arr[i]
        let j = i - 1

        setCurrentIndex(i)
        await sleep(animationSpeedMs)

        while (j >= 0 && arr[j] > key) {
          if (!isSortingRef.current) return

          setComparingIndex(j)
          await sleep(animationSpeedMs)

          arr[j + 1] = arr[j]
          setNumbers([...arr])
          j--
        }

        arr[j + 1] = key
        setNumbers([...arr])
      }
    },
    [isSortingRef, animationSpeedMs],
  )

  return insertionSort
}
