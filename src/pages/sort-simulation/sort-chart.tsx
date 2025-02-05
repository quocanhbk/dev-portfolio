import { memo } from "react"
import SortStats from "./sort-stats"
import { SortAlgorithm } from "./types"

interface SortChartProps {
  algorithm: SortAlgorithm
  numbers: number[]
  currentIndex: number
  comparingIndex: number
  comparisons: number
  swaps: number
}

const SortChart = ({ algorithm, numbers, currentIndex, comparingIndex, comparisons, swaps }: SortChartProps) => {
  const getBarColor = (index: number) => {
    if (index === currentIndex) return "bg-red-500"
    if (index === comparingIndex) return "bg-blue-500"
    return "bg-green-500"
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-950 overflow-hidden">
      <SortStats algorithm={algorithm} comparisons={comparisons} swaps={swaps} />
      <div className="flex-1 flex items-end justify-center px-4 overflow-hidden">
        <div className="w-full max-w-4xl h-96 max-h-full flex items-end justify-center gap-[2px]">
          {numbers.map((num, index) => (
            <div
              key={index}
              className={`flex-1 ${getBarColor(index)}`}
              style={{
                height: `${num / 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(SortChart)
