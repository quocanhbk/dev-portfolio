import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SORT_ALGORITHMS } from "@/constants"
import { SortAlgorithm } from "./types"

interface SortStatsProps {
  algorithm: SortAlgorithm
  comparisons: number
  swaps: number
}

const SortStats = ({ algorithm, comparisons, swaps }: SortStatsProps) => {
  const algorithmInfo = SORT_ALGORITHMS.find(a => a.value === algorithm)

  return (
    <div className="p-4 flex justify-end items-center space-x-3">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <div className="text-white text-sm font-mono font-bold">{algorithmInfo?.name}</div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-sm" sideOffset={10}>
            {algorithmInfo?.description}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="rounded-full size-1 bg-neutral-500" />
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <div className="text-white text-sm">
              <span className="font-medium">Comparisons:</span>{" "}
              <span className="font-mono">{comparisons.toLocaleString()}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-sm" sideOffset={10}>
            The number of times the algorithm compares two elements.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="rounded-full size-1 bg-neutral-500" />
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <div className="text-white text-sm">
              <span className="font-medium">Swaps:</span> <span className="font-mono">{swaps.toLocaleString()}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-sm" sideOffset={10}>
            The number of times the algorithm swaps two elements.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default SortStats
