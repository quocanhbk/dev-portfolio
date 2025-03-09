import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { Route, Routes } from "react-router-dom"
import { Footer } from "./components/ui"
import Header from "./components/ui/header"
import AboutMeView from "./components/views/about-me-view"
import ContactView from "./components/views/contact-view"
import HomeView from "./components/views/home-view"
import ProjectsView from "./components/views/projects-view"
import SkillsView from "./components/views/skills-view"
import SortSimulation from "./pages/sort-simulation/"

const App = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    // Handle hash links with smooth scrolling
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash) {
        e.preventDefault()
        const targetElement = document.querySelector(anchor.hash)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth",
          })

          // Update URL without causing a page jump
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    document.addEventListener("click", handleHashClick)

    return () => {
      document.removeEventListener("click", handleHashClick)
    }
  }, [])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Helmet>
                <title>quocanhbk17</title>
              </Helmet>
              <Header />
              <HomeView />
              <AboutMeView />
              <ProjectsView />
              <SkillsView />
              <ContactView />
              <Footer />
            </main>
          }
        />
        <Route path="/sort-simulation" element={<SortSimulation />} />
      </Routes>
    </>
  )
}

export default App
