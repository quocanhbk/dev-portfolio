import { useSortSimulation } from "@/hooks"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import SortChart from "./sort-chart"
import SortControls from "./sort-controls"

const SortSimulation = () => {
  const [arrayLength, setArrayLength] = useState(50)
  const [animationSpeed, setAnimationSpeed] = useState(10)

  const { algorithms, isSorting, start, stop, reset, changeAlgorithm, addAlgorithm, removeAlgorithm } =
    useSortSimulation({
      arrayLength,
      animationSpeedMs: animationSpeed,
    })

  const handleArrayLengthChange = (value: number) => {
    setArrayLength(value)
    reset(value)
  }

  const handleAnimationSpeedChange = (value: number) => {
    setAnimationSpeed(value)
    reset(arrayLength)
  }

  return (
    <>
      <Helmet>
        <title>Sort Simulation</title>
      </Helmet>
      <div className="w-full h-screen bg-slate-950 flex">
        <SortControls
          arrayLength={arrayLength}
          onArrayLengthChange={handleArrayLengthChange}
          selectedAlgorithms={algorithms.map(algorithm => algorithm.algorithm)}
          onAlgorithmChange={changeAlgorithm}
          animationSpeed={animationSpeed}
          onAnimationSpeedChange={handleAnimationSpeedChange}
          isSorting={isSorting}
          onStart={start}
          onStop={stop}
          onReset={reset}
          onAddAlgorithm={addAlgorithm}
          onRemoveAlgorithm={removeAlgorithm}
        />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(32rem,1fr))] gap-px auto-rows-fr bg-slate-800">
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
