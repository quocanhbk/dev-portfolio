import { cn } from "@/lib/utils"

import { Link } from "react-router-dom"

export interface NavItemProps {
  label: string
  href: string
  isActive: boolean
  onClick?: () => void
  className?: string
}

export const NavItem = ({ label, href, isActive, onClick, className }: NavItemProps) => {
  return (
    <Link to={href} className={cn("px-3 py-1 relative text-slate-900", className)} onClick={onClick}>
      {label}
      {isActive && (
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
      )}
    </Link>
  )
}
