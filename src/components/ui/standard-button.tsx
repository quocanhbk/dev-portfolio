import { cn } from "@/lib/utils"

interface StandardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const StandardButton = ({ className, ...props }: StandardButtonProps) => {
  return (
    <button className={cn("bg-slate-700 px-4 py-2 relative group", className)} {...props}>
      {props.children}
      <span
        className={cn(
          "absolute inset-0 bg-white text-slate-900 translate-x-1 -translate-y-1 flex items-center justify-center font-medium",
          "group-hover:translate-x-1.5 group-hover:-translate-y-1.5",
          "group-active:translate-x-0 group-active:-translate-y-0",
          "transition-all duration-300 ease-in-out pointer-events-none",
        )}
      >
        {props.children}
      </span>
    </button>
  )
}
