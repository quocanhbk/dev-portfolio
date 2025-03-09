import { NAV_LINKS } from "@/constants"
import { useActiveSection } from "@/hooks/useActiveSection"
import { useState } from "react"
import { CancelIcon, HamburgerIcon } from "../icons"
import { Drawer, DrawerContent, DrawerTrigger } from "./drawer"
import { NavItem } from "./nav-item"

const Header = () => {
  const activeSection = useActiveSection()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm text-slate-100">
      <div className="flex justify-end items-center py-4 px-8">
        <div className="gap-4 hidden md:flex">
          {NAV_LINKS.map(nav => (
            <NavItem
              key={nav.hashes[0]}
              label={nav.label}
              href={nav.hashes[0]}
              isActive={nav.hashes.includes(activeSection)}
            />
          ))}
        </div>
        <Drawer direction="right" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger className="md:hidden">
            <HamburgerIcon className="size-8 text-blue-600" />
          </DrawerTrigger>
          <DrawerContent className="right-0 top-0 bottom-0 fixed outline-none w-full max-w-md flex z-50 bg-white backdrop-blur-sm">
            <div className="flex flex-col gap-8 p-8 justify-center items-center w-full">
              {NAV_LINKS.map(nav => (
                <NavItem
                  key={nav.hashes[0]}
                  label={nav.label}
                  href={nav.hashes[0]}
                  isActive={nav.hashes.includes(activeSection)}
                  onClick={() => setIsDrawerOpen(false)}
                />
              ))}
            </div>
            <button className="absolute top-4 right-8" onClick={() => setIsDrawerOpen(false)}>
              <CancelIcon className="size-6 text-slate-900" />
            </button>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default Header
