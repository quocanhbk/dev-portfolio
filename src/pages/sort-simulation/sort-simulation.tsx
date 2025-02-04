import { SORT_ALGORITHMS } from "@/constants"
import { useSortAlgorithms } from "@/hooks/sort-algorithms/"
import { useRef, useState } from "react"
import { Helmet } from "react-helmet-async"
import SortChart from "./sort-chart"
import SortControls from "./sort-controls"
import { type SortAlgorithm } from "./types"

interface AlgorithmState {
  algorithm: SortAlgorithm
  numbers: number[]
  currentIndex: number
  comparingIndex: number
  comparisons: number
  swaps: number
  isSorted: boolean
}

const SortSimulation = () => {
  const [arrayLength, setArrayLength] = useState(50)
  const [animationSpeed, setAnimationSpeed] = useState(10)

  const generateAlgorithmState = (length: number, algorithm: SortAlgorithm): AlgorithmState => ({
    algorithm,
    numbers: Array.from({ length }, () => Math.floor(Math.random() * 100) + 1),
    currentIndex: -1,
    comparingIndex: -1,
    comparisons: 0,
    swaps: 0,
    isSorted: false,
  })

  const [algorithms, setAlgorithms] = useState<AlgorithmState[]>([generateAlgorithmState(arrayLength, "bubble")])

  const [isSorting, setIsSorting] = useState([false])
  const isSortingRef = useRef([{ current: false }])

  const sortFunctions = useSortAlgorithms({
    animationSpeedMs: animationSpeed,
    algorithms: algorithms.map(algorithm => algorithm.algorithm),
  })

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

  const handleStart = async () => {
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

  const setSorting = (value: boolean) => {
    isSortingRef.current.forEach(ref => {
      ref.current = value
    })
    setIsSorting(algorithms.map(() => value))
  }

  const handleStop = () => {
    setSorting(false)
  }

  const handleReset = (length: number) => {
    setSorting(false)
    resetAlgorithmStates(length)
  }

  const resetAlgorithmStates = (length: number) => {
    setAlgorithms(prev => prev.map(algorithm => generateAlgorithmState(length, algorithm.algorithm)))
  }

  const handleArrayLengthChange = (value: number) => {
    setArrayLength(value)
    handleReset(value)
  }

  const handleAlgorithmChange = (index: number, value: SortAlgorithm) => {
    setAlgorithms(prev =>
      prev.map((algorithm, i) => (i === index ? generateAlgorithmState(arrayLength, value) : algorithm)),
    )
    handleReset(arrayLength)
  }

  const handleAnimationSpeedChange = (value: number) => {
    setAnimationSpeed(value)
    handleReset(arrayLength)
  }

  const handleAddAlgorithm = () => {
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

  const handleRemoveAlgorithm = (index: number) => {
    setAlgorithms(prev => prev.filter((_, i) => i !== index))
    setIsSorting(prev => prev.filter((_, i) => i !== index))
    isSortingRef.current.splice(index, 1)
  }

  return (
    <>
      <Helmet>
        <title>Sort Simulation</title>
      </Helmet>
      <div className="w-full h-screen bg-slate-900 flex">
        <SortControls
          arrayLength={arrayLength}
          onArrayLengthChange={handleArrayLengthChange}
          selectedAlgorithms={algorithms.map(algorithm => algorithm.algorithm)}
          onAlgorithmChange={handleAlgorithmChange}
          animationSpeed={animationSpeed}
          onAnimationSpeedChange={handleAnimationSpeedChange}
          isSorting={isSorting.some(isSorting => isSorting)}
          onStart={handleStart}
          onStop={handleStop}
          onReset={() => handleReset(arrayLength)}
          onAddAlgorithm={handleAddAlgorithm}
          onRemoveAlgorithm={handleRemoveAlgorithm}
        />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(32rem,1fr))] gap-px auto-rows-fr bg-neutral-800">
          {algorithms.map((algorithm, index) => (
            <SortChart
              key={index}
              algorithm={algorithm.algorithm}
              numbers={algorithm.numbers}
              currentIndex={algorithm.currentIndex}
              comparingIndex={algorithm.comparingIndex}
              comparisons={algorithm.comparisons}
              swaps={algorithm.swaps}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SortSimulation
