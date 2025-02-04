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

export const useSortAlgorithm = ({
  isSortingRef,
  animationSpeedMs,
  algorithm,
}: SortHookProps & { algorithm: SortAlgorithm }) => {
  const bubbleSort = useBubbleSort({ isSortingRef, animationSpeedMs })
  const insertionSort = useInsertionSort({ isSortingRef, animationSpeedMs })
  const mergeSort = useMergeSort({ isSortingRef, animationSpeedMs })
  const quickSort = useQuickSort({ isSortingRef, animationSpeedMs })
  const shellSort = useShellSort({ isSortingRef, animationSpeedMs })
  const cocktailSort = useCocktailSort({ isSortingRef, animationSpeedMs })
  const pancakeSort = usePancakeSort({ isSortingRef, animationSpeedMs })
  const radixSort = useRadixSort({ isSortingRef, animationSpeedMs })
  const heapSort = useHeapSort({ isSortingRef, animationSpeedMs })

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

  return sortMap[algorithm]
}
