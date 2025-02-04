import { useBubbleSort, useInsertionSort, useMergeSort, useQuickSort } from "@/hooks/sort-algorithms"
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

  const bubbleSort = useBubbleSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const insertionSort = useInsertionSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const mergeSort = useMergeSort({ isSortingRef, animationSpeedMs: animationSpeed })
  const quickSort = useQuickSort({ isSortingRef, animationSpeedMs: animationSpeed })

  const handleStart = async () => {
    setIsSorting(true)
    isSortingRef.current = true

    try {
      switch (selectedAlgorithm) {
        case "bubble":
          await bubbleSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex })
          break
        case "insertion":
          await insertionSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex })
          break
        case "merge":
          await mergeSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex })
          break
        case "quick":
          await quickSort({ numbers, setNumbers, setCurrentIndex, setComparingIndex })
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

  const handleReset = () => {
    isSortingRef.current = false
    setIsSorting(false)
    setCurrentIndex(-1)
    setComparingIndex(-1)
    generateNewArray(arrayLength)
  }

  const generateNewArray = (length: number) => {
    setNumbers(Array.from({ length }, () => Math.floor(Math.random() * 100) + 1))
  }

  const handleArrayLengthChange = (value: number) => {
    setArrayLength(value)
    generateNewArray(value)
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
          onAlgorithmChange={setSelectedAlgorithm}
          animationSpeed={animationSpeed}
          onAnimationSpeedChange={setAnimationSpeed}
          isSorting={isSorting}
          onStart={handleStart}
          onStop={handleStop}
          onReset={handleReset}
        />
        <SortChart numbers={numbers} currentIndex={currentIndex} comparingIndex={comparingIndex} />
      </div>
    </>
  )
}

export default SortSimulation
