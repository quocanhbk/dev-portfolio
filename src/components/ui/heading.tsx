import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const Heading = ({
  children,
  className,
  ...props
}: Omit<React.ComponentProps<typeof motion.h2>, "children"> & { children: React.ReactNode }) => {
  return (
    <motion.h2 className={cn("text-4xl font-bold mb-16 text-center text-slate-900 relative", className)} {...props}>
      <span className="relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
      </span>
    </motion.h2>
  )
}

export const SubHeading = ({
  children,
  className,
  ...props
}: Omit<React.ComponentProps<typeof motion.h3>, "children"> & { children: React.ReactNode }) => {
  return (
    <motion.h3
      className={cn("text-2xl font-bold mb-8 text-center text-slate-900 relative inline-block", className)}
      {...props}
    >
      {children}
      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
    </motion.h3>
  )
}
