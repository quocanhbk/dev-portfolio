import { ANIMATION_SPEED_MS, sleep, SortFunction } from "./types"

const partition = async (
  arr: number[],
  low: number,
  high: number,
  setNumbers: (numbers: number[]) => void,
  setCurrentIndex: (index: number) => void,
  setComparingIndex: (index: number) => void,
) => {
  const pivot = arr[high]
  let i = low - 1

  for (let j = low; j < high; j++) {
    setCurrentIndex(j)
    setComparingIndex(high) // pivot
    await sleep(ANIMATION_SPEED_MS)

    if (arr[j] < pivot) {
      i++
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
      setNumbers([...arr])
    }
  }

  ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  setNumbers([...arr])
  return i + 1
}

const quickSortHelper = async (
  arr: number[],
  low: number,
  high: number,
  setNumbers: (numbers: number[]) => void,
  setCurrentIndex: (index: number) => void,
  setComparingIndex: (index: number) => void,
) => {
  if (low < high) {
    const pi = await partition(arr, low, high, setNumbers, setCurrentIndex, setComparingIndex)
    if (pi === -1) return // sorting was cancelled
    await quickSortHelper(arr, low, pi - 1, setNumbers, setCurrentIndex, setComparingIndex)
    await quickSortHelper(arr, pi + 1, high, setNumbers, setCurrentIndex, setComparingIndex)
  }
}

export const quickSort: SortFunction = async (numbers, setNumbers, setCurrentIndex, setComparingIndex) => {
  const arr = [...numbers]
  await quickSortHelper(arr, 0, arr.length - 1, setNumbers, setCurrentIndex, setComparingIndex)
}
