import { NAV_LINKS } from "@/constants"
import { useEffect, useState } from "react"

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(nav => {
        const hash = nav.hashes[0]
        const id = hash.startsWith("#") ? hash.substring(1) : hash
        return document.getElementById(id)
      }).filter(Boolean)

      const currentPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        if (!section) continue

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (currentPosition >= sectionTop && currentPosition <= sectionTop + sectionHeight) {
          const sectionId = section.getAttribute("id")
          if (sectionId) {
            setActiveSection(`#${sectionId}`)
            return
          }
        }
      }

      // If we're at the top of the page and no section is active, set the first section as active
      if (window.scrollY < 100 && sections.length > 0) {
        const firstSectionId = sections[0]?.getAttribute("id")
        if (firstSectionId) {
          setActiveSection(`#${firstSectionId}`)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return activeSection
}
