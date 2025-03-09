import { cn } from "@/lib/utils"

const SecondaryButton = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "group relative px-8 py-4 overflow-hidden rounded-lg bg-white border-2 border-blue-600 text-blue-600 shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-10"></div>
      <span className="relative flex items-center justify-center gap-4">{children}</span>
    </button>
  )
}

export default SecondaryButton
