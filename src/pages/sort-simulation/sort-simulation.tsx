import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { SORT_ALGORITHMS } from "@/constants"
import { useBubbleSort, useInsertionSort, useMergeSort, useQuickSort } from "@/hooks/sort-algorithms"
import { useRef, useState } from "react"
import { Helmet } from "react-helmet-async"

type SortAlgorithm = "bubble" | "quick" | "merge" | "insertion"

const SortSimulation = () => {
  const [arrayLength, setArrayLength] = useState<number>(50)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortAlgorithm>("bubble")
  const [numbers, setNumbers] = useState<number[]>(() =>
    Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 100) + 1),
  )
  const [isSorting, setIsSorting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [comparingIndex, setComparingIndex] = useState(-1)
  const isSortingRef = useRef(false)

  const bubbleSort = useBubbleSort({ isSortingRef, animationSpeedMs: 10 })
  const insertionSort = useInsertionSort({ isSortingRef, animationSpeedMs: 10 })
  const mergeSort = useMergeSort({ isSortingRef, animationSpeedMs: 10 })
  const quickSort = useQuickSort({ isSortingRef, animationSpeedMs: 10 })

  const handleStart = async () => {
    setIsSorting(true)
    isSortingRef.current = true

    try {
      switch (selectedAlgorithm) {
        case "bubble":
          await bubbleSort(numbers, setNumbers, setCurrentIndex, setComparingIndex)
          break
        case "insertion":
          await insertionSort(numbers, setNumbers, setCurrentIndex, setComparingIndex)
          break
        case "merge":
          await mergeSort(numbers, setNumbers, setCurrentIndex, setComparingIndex)
          break
        case "quick":
          await quickSort(numbers, setNumbers, setCurrentIndex, setComparingIndex)
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

  const getBarColor = (index: number) => {
    if (index === currentIndex) return "bg-red-500"
    if (index === comparingIndex) return "bg-blue-500"
    return "bg-green-500"
  }

  return (
    <>
      <Helmet>
        <title>Sort Simulation</title>
      </Helmet>
      <div className="w-full h-screen bg-slate-900 flex">
        <div className="w-80 bg-slate-800 p-6 flex flex-col">
          <h2 className="text-white text-xl font-bold mb-6">Controls</h2>

          <div className="space-y-6 flex-1">
            <div>
              <label className="block text-white text-sm font-medium mb-4">Array Length: {arrayLength}</label>
              <Slider
                value={[arrayLength]}
                onValueChange={value => handleArrayLengthChange(value[0])}
                min={5}
                max={200}
                disabled={isSorting}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-4">Algorithm</label>
              <Select value={selectedAlgorithm} onValueChange={value => setSelectedAlgorithm(value as SortAlgorithm)}>
                <SelectTrigger className="w-full bg-slate-700">
                  <SelectValue placeholder="Algorithm" />
                </SelectTrigger>
                <SelectContent>
                  {SORT_ALGORITHMS.map(algorithm => (
                    <SelectItem key={algorithm.value} value={algorithm.value}>
                      {algorithm.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3 flex flex-col">
            <Button onClick={() => (isSorting ? handleStop() : handleStart())}>{isSorting ? "Stop" : "Start"}</Button>
            <Button onClick={handleReset} variant={"outline"}>
              Reset
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-4xl h-96 flex items-end justify-center gap-[2px]">
            {numbers.map((num, index) => (
              <div
                key={index}
                className={`flex-1 ${getBarColor(index)}`}
                style={{
                  height: `${num}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SortSimulation
