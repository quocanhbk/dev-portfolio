import {
  useBubbleSort,
  useCocktailSort,
  useInsertionSort,
  useMergeSort,
  usePancakeSort,
  useQuickSort,
  useRadixSort,
} from "@/hooks/sort-algorithms"
import { useShellSort } from "@/hooks/sort-algorithms/use-shell-sort"
import { useRef, useState } from "react"
import { Helmet } from "react-helmet-async"
import SortChart from "./sort-chart"
import SortControls from "./sort-controls"
import { type SortAlgorithm } from "./types"

const SortSimulation = () => {
  const [arrayLength, setArrayLength] = useState(50)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortAlgorithm>("bubble")
  const [animationSpeed, setAnimationSpeed] = useState(10)
  const [numbers, setNumbers] = useState(() =>
    Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100) + 1),
  )
  const [isSorting, setIsSorting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [comparingIndex, setComparingIndex] = useState(-1)
  const isSortingRef = useRef(false)

  const [comparisons, setComparisons] = useState(0)
  const [swaps, setSwaps] = useState(0)

  const bubbleSort = useBubbleSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const insertionSort = useInsertionSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const mergeSort = useMergeSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const quickSort = useQuickSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const shellSort = useShellSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const cocktailSort = useCocktailSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const pancakeSort = usePancakeSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const radixSort = useRadixSort({ isSortingRef, animationSpeedMs: animationSpeed })

  const handleStart = async () => {
    setIsSorting(true)
    isSortingRef.current = true
    setComparisons(0)
    setSwaps(0)

    try {
      switch (selectedAlgorithm) {
        case "bubble":
          await bubbleSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps })
          break
        case "insertion":
          await insertionSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps })
          break
        case "merge":
          await mergeSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps })
          break
        case "quick":
          await quickSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps })
          break
        case "shell":
          await shellSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps })
          break
        case "cocktail":
          await cocktailSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps })
          break
        case "pancake":
          await pancakeSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps })
          break
        case "radix":
          await radixSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex, setComparisons, setSwaps })
          break
      }
    } catch (error) {
      console.error(error)
    } finally {
      isSortingRef.current = false
      setIsSorting(false)
      setCurrentIndex(-1)
      setComparingIndex(-1)
    }
  }

  const handleStop = () => {
    isSortingRef.current = false
    setIsSorting(false)
  }

  const handleReset = (length: number) => {
    isSortingRef.current = false
    setIsSorting(false)
    setCurrentIndex(-1)
    setComparingIndex(-1)
    setComparisons(0)
    setSwaps(0)
    generateNewArray(length)
  }

  const generateNewArray = (length: number) => {
    setNumbers(Array.from({ length }, () => Math.floor(Math.random() * 100) + 1))
  }

  const handleArrayLengthChange = (value: number) => {
    setArrayLength(value)
    handleReset(value)
  }

  const handleAlgorithmChange = (value: SortAlgorithm) => {
    setSelectedAlgorithm(value)
    handleReset(arrayLength)
  }

  const handleAnimationSpeedChange = (value: number) => {
    setAnimationSpeed(value)
    handleReset(arrayLength)
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
          selectedAlgorithm={selectedAlgorithm}
          onAlgorithmChange={handleAlgorithmChange}
          animationSpeed={animationSpeed}
          onAnimationSpeedChange={handleAnimationSpeedChange}
          isSorting={isSorting}
          onStart={handleStart}
          onStop={handleStop}
          onReset={() => handleReset(arrayLength)}
        />
        <SortChart
          numbers={numbers}
          currentIndex={currentIndex}
          comparingIndex={comparingIndex}
          comparisons={comparisons}
          swaps={swaps}
        />
      </div>
    </>
  )
}

export default SortSimulation
