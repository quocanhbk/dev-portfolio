import { NAV_LINKS } from "@/constants"
import { useActiveSection } from "@/hooks/useActiveSection"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

const Header = () => {
  const activeSection = useActiveSection()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm text-slate-100">
      <div className="flex justify-end items-center py-4 px-8">
        <div className="flex gap-4">
          {NAV_LINKS.map(nav => (
            <Link to={nav.hashes[0]} key={nav.hashes[0]} className={cn("px-3 py-1 relative text-slate-900")}>
              {nav.label}
              {nav.hashes.includes(activeSection) && (
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
