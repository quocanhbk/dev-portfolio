import { useEffect, useState } from "react"

type ScrollDirection = "up" | "down" | null

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        setVisible(true)
        setScrollDirection(null)
        setPrevScrollY(currentScrollY)
        return
      }

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        if (scrollDirection !== "down") {
          setScrollDirection("down")
          setVisible(false)
        }
      } else {
        // Scrolling up
        if (scrollDirection !== "up") {
          setScrollDirection("up")
          setVisible(true)
        }
      }

      setPrevScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollDirection, prevScrollY])

  return { scrollDirection, visible }
}
