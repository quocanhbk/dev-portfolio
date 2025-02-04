import { ANIMATION_SPEED_MS, sleep, SortFunction } from "./types"

const merge = async (
  arr: number[],
  left: number,
  middle: number,
  right: number,
  setNumbers: (numbers: number[]) => void,
  setCurrentIndex: (index: number) => void,
  setComparingIndex: (index: number) => void,
) => {
  const n1 = middle - left + 1
  const n2 = right - middle

  const L = arr.slice(left, middle + 1)
  const R = arr.slice(middle + 1, right + 1)

  let i = 0
  let j = 0
  let k = left

  while (i < n1 && j < n2) {
    setCurrentIndex(left + i)
    setComparingIndex(middle + 1 + j)
    await sleep(ANIMATION_SPEED_MS)

    if (L[i] <= R[j]) {
      arr[k] = L[i]
      i++
    } else {
      arr[k] = R[j]
      j++
    }
    setNumbers([...arr])
    k++
  }

  while (i < n1) {
    arr[k] = L[i]
    setNumbers([...arr])
    i++
    k++
  }

  while (j < n2) {
    arr[k] = R[j]
    setNumbers([...arr])
    j++
    k++
  }
}

const mergeSortHelper = async (
  arr: number[],
  left: number,
  right: number,
  setNumbers: (numbers: number[]) => void,
  setCurrentIndex: (index: number) => void,
  setComparingIndex: (index: number) => void,
) => {
  if (left < right) {
    const middle = Math.floor((left + right) / 2)

    await mergeSortHelper(arr, left, middle, setNumbers, setCurrentIndex, setComparingIndex)
    await mergeSortHelper(arr, middle + 1, right, setNumbers, setCurrentIndex, setComparingIndex)
    await merge(arr, left, middle, right, setNumbers, setCurrentIndex, setComparingIndex)
  }
}

export const mergeSort: SortFunction = async (numbers, setNumbers, setCurrentIndex, setComparingIndex) => {
  const arr = [...numbers]
  await mergeSortHelper(arr, 0, arr.length - 1, setNumbers, setCurrentIndex, setComparingIndex)
}
