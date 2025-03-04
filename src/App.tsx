import { Helmet } from "react-helmet-async"
import { Route, Routes } from "react-router-dom"
import Header from "./components/ui/header"
import HomeView from "./components/views/home-view"
import SortSimulation from "./pages/sort-simulation/"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Helmet>
                <title>quocanhbk17</title>
              </Helmet>
              <HomeView />
            </main>
          }
        />
        <Route path="/sort-simulation" element={<SortSimulation />} />
      </Routes>
    </>
  )
}

export default App
