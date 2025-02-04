interface SortChartProps {
  numbers: number[]
  currentIndex: number
  comparingIndex: number
  comparisons: number
  swaps: number
}

const SortChart = ({ numbers, currentIndex, comparingIndex, comparisons, swaps }: SortChartProps) => {
  const getBarColor = (index: number) => {
    if (index === currentIndex) return "bg-red-500"
    if (index === comparingIndex) return "bg-blue-500"
    return "bg-green-500"
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 flex justify-end space-x-6">
        <div className="text-white">
          <span className="font-medium">Comparisons:</span>{" "}
          <span className="font-mono">{comparisons.toLocaleString()}</span>
        </div>
        <div className="text-white">
          <span className="font-medium">Swaps:</span> <span className="font-mono">{swaps.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex-1 flex items-end justify-center px-4">
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
  )
}

export default SortChart
