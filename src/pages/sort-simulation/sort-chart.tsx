interface SortChartProps {
  numbers: number[]
  currentIndex: number
  comparingIndex: number
}

const SortChart = ({ numbers, currentIndex, comparingIndex }: SortChartProps) => {
  const getBarColor = (index: number) => {
    if (index === currentIndex) return "bg-red-500"
    if (index === comparingIndex) return "bg-blue-500"
    return "bg-green-500"
  }

  return (
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
  )
}

export default SortChart
