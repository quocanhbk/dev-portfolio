import { SortAlgorithm } from "@/pages/sort-simulation/types"
import { SortFunction } from "./types"
import { SortHookProps, useBubbleSort } from "./use-bubble-sort"
import { useCocktailSort } from "./use-cocktail-sort"
import { useHeapSort } from "./use-heap-sort"
import { useInsertionSort } from "./use-insertion-sort"
import { useMergeSort } from "./use-merge-sort"
import { usePancakeSort } from "./use-pancake-sort"
import { useQuickSort } from "./use-quick-sort"
import { useRadixSort } from "./use-radix-sort"
import { useShellSort } from "./use-shell-sort"

export const useSortAlgorithms = ({
  animationSpeedMs,
  algorithms,
}: SortHookProps & { algorithms: SortAlgorithm[] }) => {
  const bubbleSort = useBubbleSort({ animationSpeedMs })
  const insertionSort = useInsertionSort({ animationSpeedMs })
  const mergeSort = useMergeSort({ animationSpeedMs })
  const quickSort = useQuickSort({ animationSpeedMs })
  const shellSort = useShellSort({ animationSpeedMs })
  const cocktailSort = useCocktailSort({ animationSpeedMs })
  const pancakeSort = usePancakeSort({ animationSpeedMs })
  const radixSort = useRadixSort({ animationSpeedMs })
  const heapSort = useHeapSort({ animationSpeedMs })

  const sortMap: Record<SortAlgorithm, SortFunction> = {
    bubble: bubbleSort,
    insertion: insertionSort,
    merge: mergeSort,
    quick: quickSort,
    shell: shellSort,
    cocktail: cocktailSort,
    pancake: pancakeSort,
    radix: radixSort,
    heap: heapSort,
  }

  return algorithms.map(algorithm => sortMap[algorithm])
}
