import { useCallback } from "react"
import { ANIMATION_SPEED_MS, SortFunction, sleep } from "./types"

export interface SortHookProps {
  isSortingRef: React.MutableRefObject<boolean>

  animationSpeedMs?: number
}

export const useBubbleSort = ({ isSortingRef, animationSpeedMs = ANIMATION_SPEED_MS }: SortHookProps) => {
  const bubbleSort: SortFunction = useCallback(
    async ({ numbers, setNumbers, setCurrentIndex, setComparingIndex }) => {
      const arr = [...numbers]
      const n = arr.length

      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          if (!isSortingRef.current) return

          setCurrentIndex(j)
          setComparingIndex(j + 1)
          await sleep(animationSpeedMs)

          if (arr[j] > arr[j + 1]) {
            ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            setNumbers([...arr])
          }
        }
      }
    },
    [isSortingRef, animationSpeedMs],
  )

  return bubbleSort
}
