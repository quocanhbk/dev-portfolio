import { ANIMATION_SPEED_MS, sleep, SortFunction } from "./types"

export const insertionSort: SortFunction = async (numbers, setNumbers, setCurrentIndex, setComparingIndex) => {
  const arr = [...numbers]
  const n = arr.length

  for (let i = 1; i < n; i++) {
    const key = arr[i]
    let j = i - 1

    setCurrentIndex(i)
    await sleep(ANIMATION_SPEED_MS)

    while (j >= 0 && arr[j] > key) {
      setComparingIndex(j)
      await sleep(ANIMATION_SPEED_MS)

      arr[j + 1] = arr[j]
      setNumbers([...arr])
      j--
    }

    arr[j + 1] = key
    setNumbers([...arr])
  }
}
