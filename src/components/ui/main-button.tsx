import { cn } from "@/lib/utils"

export const MainButton = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20"></div>
      <span className="relative flex items-center justify-center gap-4">{children}</span>
    </button>
  )
}
