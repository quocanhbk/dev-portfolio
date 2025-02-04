import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { Helmet } from "react-helmet-async"

type SortAlgorithm = "bubble" | "quick" | "merge" | "insertion"

const SortSimulation = () => {
  const [arrayLength, setArrayLength] = useState<number>(50)

  const [selectedAlgorithm, setSelectedAlgorithm] = useState<SortAlgorithm>("bubble")

  const [numbers, setNumbers] = useState<number[]>(() =>
    Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 10000) + 1),
  )
  const [isSorting, setIsSorting] = useState(false)

  const generateNewArray = (arrayLength: number) => {
    setNumbers(Array.from({ length: arrayLength }, () => Math.floor(Math.random() * 10000) + 1))
  }

  const handleStart = () => {
    setIsSorting(true)
    // Sorting implementation will go here
  }

  const handleReset = () => {
    setIsSorting(false)
    generateNewArray(arrayLength)
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
                  <SelectItem value="bubble">Bubble Sort</SelectItem>
                  <SelectItem value="quick">Quick Sort</SelectItem>
                  <SelectItem value="merge">Merge Sort</SelectItem>
                  <SelectItem value="insertion">Insertion Sort</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3 flex flex-col">
            <Button onClick={handleStart} disabled={isSorting}>
              Start
            </Button>
            <Button onClick={handleReset} disabled={isSorting} variant={"outline"}>
              Reset
            </Button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl h-96 flex items-end justify-center gap-[2px]">
            {numbers.map((num, index) => (
              <div
                key={index}
                className="flex-1 bg-green-500 transition-all duration-150"
                style={{
                  height: `${num / 100}%`,
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
