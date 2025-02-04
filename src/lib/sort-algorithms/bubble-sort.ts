import { ANIMATION_SPEED_MS, sleep, SortFunction } from "./types"

export const bubbleSort: SortFunction = async (numbers, setNumbers, setCurrentIndex, setComparingIndex) => {
  const arr = [...numbers]
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log("Bubble sort", i, j)

      setCurrentIndex(j)
      setComparingIndex(j + 1)
      await sleep(ANIMATION_SPEED_MS)

      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        setNumbers([...arr])
      }
    }
  }
}
