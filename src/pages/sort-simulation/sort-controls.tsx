import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { SORT_ALGORITHMS } from "@/constants"
import { type SortAlgorithm } from "./types"

interface SortControlsProps {
  arrayLength: number
  onArrayLengthChange: (value: number) => void
  selectedAlgorithm: SortAlgorithm
  onAlgorithmChange: (value: SortAlgorithm) => void
  isSorting: boolean
  onStart: () => void
  onStop: () => void
  onReset: () => void
}

const SortControls = ({
  arrayLength,
  onArrayLengthChange,
  selectedAlgorithm,
  onAlgorithmChange,
  isSorting,
  onStart,
  onStop,
  onReset,
}: SortControlsProps) => {
  return (
    <div className="w-80 bg-slate-800 p-6 flex flex-col">
      <h2 className="text-white text-xl font-bold mb-6">Controls</h2>
      <div className="space-y-6 flex-1">
        <div>
          <label className="block text-white text-sm font-medium mb-4">Array Length: {arrayLength}</label>
          <Slider
            value={[arrayLength]}
            onValueChange={value => onArrayLengthChange(value[0])}
            min={5}
            max={200}
            disabled={isSorting}
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-4">Algorithm</label>
          <Select value={selectedAlgorithm} onValueChange={value => onAlgorithmChange(value as SortAlgorithm)}>
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
        <Button onClick={() => (isSorting ? onStop() : onStart())}>{isSorting ? "Stop" : "Start"}</Button>
        <Button onClick={onReset} variant={"outline"}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export default SortControls
