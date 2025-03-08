import { NAV_LINKS } from "@/constants"
import { useActiveSection } from "@/hooks/useActiveSection"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

const Header = () => {
  const activeSection = useActiveSection()

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-slate-900/90 backdrop-blur-sm text-slate-100">
      <div className="flex justify-end items-center py-4 px-8">
        <div className="flex gap-4">
          {NAV_LINKS.map(nav => (
            <Link
              to={nav.hashes[0]}
              key={nav.hashes[0]}
              className={cn("px-3 py-1 relative", {
                "bg-white text-slate-900": nav.hashes.includes(activeSection),
                "hover:bg-white/10": !nav.hashes.includes(activeSection),
              })}
            >
              {nav.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
