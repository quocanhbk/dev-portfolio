import { Helmet } from "react-helmet-async";
import { Link, Route, Routes } from "react-router-dom";
import SortSimulation from "./pages/sort-simulation/";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center gap-4">
            <Helmet>
              <title>quocanhbk17</title>
            </Helmet>
            <h1 className="text-white font-black text-7xl">quocanhbk17</h1>
            <Link
              to="/sort-simulation"
              className="text-white text-xl hover:text-blue-400 transition-colors"
            >
              Sort Simulation
            </Link>
          </main>
        }
      />
      <Route path="/sort-simulation" element={<SortSimulation />} />
    </Routes>
  );
};

export default App;
