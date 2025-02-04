import { SORT_ALGORITHMS } from "@/constants"
import { useSortAlgorithms } from "@/hooks"
import { useRef, useState } from "react"
import { SortAlgorithm } from "../../pages/sort-simulation/types"

export interface AlgorithmState {
  algorithm: SortAlgorithm
  numbers: number[]
  currentIndex: number
  comparingIndex: number
  comparisons: number
  swaps: number
  isSorted: boolean
}

export interface SortSimulationProps {
  arrayLength: number
  animationSpeedMs: number
}

const generateAlgorithmState = (length: number, algorithm: SortAlgorithm): AlgorithmState => ({
  algorithm,
  numbers: Array.from({ length }, () => Math.floor(Math.random() * 100) + 1),
  currentIndex: -1,
  comparingIndex: -1,
  comparisons: 0,
  swaps: 0,
  isSorted: false,
})

export const useSortSimulation = ({ arrayLength, animationSpeedMs }: SortSimulationProps) => {
  const [algorithms, setAlgorithms] = useState<AlgorithmState[]>([generateAlgorithmState(arrayLength, "bubble")])

  const [isSorting, setIsSorting] = useState([false])
  const isSortingRef = useRef([{ current: false }])

  const sortFunctions = useSortAlgorithms({
    animationSpeedMs,
    algorithms: algorithms.map(algorithm => algorithm.algorithm),
  })

  const setSorting = (value: boolean) => {
    isSortingRef.current.forEach(ref => {
      ref.current = value
    })
    setIsSorting(algorithms.map(() => value))
  }

  const resetStats = ({ isResuming = false }: { isResuming?: boolean } = {}) => {
    const shouldResetStats = !isResuming || (isResuming && algorithms.every(algorithm => algorithm.isSorted))

    setAlgorithms(prev =>
      prev.map(algorithm => ({
        ...algorithm,
        comparisons: shouldResetStats ? 0 : algorithm.comparisons,
        swaps: shouldResetStats ? 0 : algorithm.swaps,
        isSorted: shouldResetStats ? false : algorithm.isSorted,
      })),
    )
  }

  const start = async () => {
    resetStats({ isResuming: true })
    setSorting(true)

    const promises = algorithms.map(async (algorithm, index) => {
      const result = await sortFunctions[index]({
        numbers: !algorithm.isSorted
          ? algorithm.numbers
          : generateAlgorithmState(arrayLength, algorithm.algorithm).numbers,
        setNumbers: (numbers: number[]) =>
          setAlgorithms(prev => prev.map((a, i) => (i === index ? { ...a, numbers } : a))),
        setCurrentIndex: (numberIndex: number) =>
          setAlgorithms(prev => prev.map((a, i) => (i === index ? { ...a, currentIndex: numberIndex } : a))),
        setComparingIndex: (numberIndex: number) =>
          setAlgorithms(prev => prev.map((a, i) => (i === index ? { ...a, comparingIndex: numberIndex } : a))),
        increaseComparisons: () =>
          setAlgorithms(prev => prev.map((a, i) => (i === index ? { ...a, comparisons: a.comparisons + 1 } : a))),
        increaseSwaps: () =>
          setAlgorithms(prev => prev.map((a, i) => (i === index ? { ...a, swaps: a.swaps + 1 } : a))),
        isSortingRef: isSortingRef.current[index],
      })

      setAlgorithms(prev =>
        prev.map((a, i) =>
          i === index
            ? {
                ...a,
                currentIndex: result ? -1 : a.currentIndex,
                comparingIndex: result ? -1 : a.comparingIndex,
                isSorted: result,
              }
            : a,
        ),
      )
    })

    try {
      await Promise.all(promises)
    } finally {
      setSorting(false)
    }
  }

  const stop = () => {
    setSorting(false)
  }

  const reset = (length?: number) => {
    setSorting(false)
    setAlgorithms(prev => prev.map(algorithm => generateAlgorithmState(length ?? arrayLength, algorithm.algorithm)))
  }

  const addAlgorithm = () => {
    const newAlgorithm = SORT_ALGORITHMS.find(a => !algorithms.some(algorithm => algorithm.algorithm === a.value))
    if (newAlgorithm) {
      setAlgorithms(prev => [...prev, generateAlgorithmState(arrayLength, newAlgorithm.value)])
      setIsSorting(prev => [...prev.map(() => false), false])
      isSortingRef.current.forEach(ref => {
        ref.current = false
      })
      isSortingRef.current.push({ current: false })
    }
  }

  const removeAlgorithm = (index: number) => {
    setAlgorithms(prev => prev.filter((_, i) => i !== index))
    setIsSorting(prev => prev.filter((_, i) => i !== index))
    isSortingRef.current.splice(index, 1)
  }

  const changeAlgorithm = (index: number, value: SortAlgorithm) => {
    setAlgorithms(prev =>
      prev.map((algorithm, i) =>
        i === index
          ? generateAlgorithmState(arrayLength, value)
          : generateAlgorithmState(arrayLength, algorithm.algorithm),
      ),
    )
  }

  return {
    algorithms,
    isSorting: isSorting.some(isSorting => isSorting),
    start,
    stop,
    reset,
    addAlgorithm,
    removeAlgorithm,
    changeAlgorithm,
  }
}
