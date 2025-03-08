import { NAV_LINKS } from "@/constants"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  return (
    <div className="bg-slate-900 text-slate-100 absolute top-0 z-10 w-full">
      <div className="flex justify-end items-center py-4 px-8">
        <div className="flex gap-4">
          {NAV_LINKS.map(nav => (
            <Link
              to={nav.hashes[0]}
              key={nav.hashes[0]}
              className={cn("px-3 py-1", {
                "bg-white text-slate-900": nav.hashes.includes(location.hash),
                "hover:bg-white/10": !nav.hashes.includes(location.hash),
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
