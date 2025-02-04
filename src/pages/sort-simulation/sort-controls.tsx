import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { SORT_ALGORITHMS } from "@/constants"
import { Trash2 } from "lucide-react"
import SortControl from "./sort-control"
import { type SortAlgorithm } from "./types"

interface SortControlsProps {
  arrayLength: number
  onArrayLengthChange: (value: number) => void
  selectedAlgorithms: SortAlgorithm[]
  onAlgorithmChange: (index: number, value: SortAlgorithm) => void
  animationSpeed: number
  onAnimationSpeedChange: (value: number) => void
  isSorting: boolean
  onStart: () => void
  onStop: () => void
  onReset: () => void
  onAddAlgorithm: () => void
  onRemoveAlgorithm: (index: number) => void
}

const SortControls = ({
  arrayLength,
  onArrayLengthChange,
  selectedAlgorithms,
  onAlgorithmChange,
  animationSpeed,
  onAnimationSpeedChange,
  isSorting,
  onStart,
  onStop,
  onReset,
  onAddAlgorithm,
  onRemoveAlgorithm,
}: SortControlsProps) => {
  return (
    <div className="w-80 bg-slate-800 p-6 flex flex-col">
      <h2 className="text-white text-xl font-bold mb-6">Controls</h2>
      <div className="space-y-12 flex-1">
        <SortControl label="Algorithm">
          <div className="flex flex-col gap-4">
            {selectedAlgorithms.map((algorithm, index) => (
              <div key={index} className="flex items-center gap-2">
                <Select value={algorithm} onValueChange={value => onAlgorithmChange(index, value as SortAlgorithm)}>
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
                <Button
                  variant={"ghost"}
                  className="px-2"
                  onClick={() => onRemoveAlgorithm(index)}
                  disabled={selectedAlgorithms.length === 1}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
            {selectedAlgorithms.length < SORT_ALGORITHMS.length && (
              <Button onClick={onAddAlgorithm}>Add Algorithm</Button>
            )}
          </div>
        </SortControl>
        <SortControl label="Size">
          <Slider
            value={[arrayLength]}
            onValueChange={value => onArrayLengthChange(value[0])}
            min={5}
            max={200}
            disabled={isSorting}
          />
        </SortControl>
        <SortControl label="Animation Speed">
          <Slider
            value={[animationSpeed]}
            onValueChange={value => onAnimationSpeedChange(value[0])}
            min={1}
            max={1000}
            disabled={isSorting}
          />
        </SortControl>
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
