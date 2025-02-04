import { useState } from "react";
import { Helmet } from "react-helmet-async";

type SortAlgorithm = "bubble" | "quick" | "merge" | "insertion";

const SortSimulation = () => {
  const [arrayLength, setArrayLength] = useState<number>(50);
  const [selectedAlgorithm, setSelectedAlgorithm] =
    useState<SortAlgorithm>("bubble");
  const [numbers, setNumbers] = useState<number[]>(() =>
    Array.from(
      { length: arrayLength },
      () => Math.floor(Math.random() * 10000) + 1
    )
  );
  const [isSorting, setIsSorting] = useState(false);

  const generateNewArray = () => {
    setNumbers(
      Array.from(
        { length: arrayLength },
        () => Math.floor(Math.random() * 10000) + 1
      )
    );
  };

  const handleStart = () => {
    setIsSorting(true);
    // Sorting implementation will go here
  };

  const handleReset = () => {
    setIsSorting(false);
    generateNewArray();
  };

  return (
    <>
      <Helmet>
        <title>Sort Simulation</title>
      </Helmet>
      <div className="w-full h-screen bg-slate-900 flex">
        <div className="w-80 bg-slate-800 p-6 flex flex-col">
          <h2 className="text-white text-xl font-bold mb-6">Controls</h2>

          <div className="space-y-4 flex-1">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Array Length: {arrayLength}
              </label>
              <input
                type="range"
                min="5"
                max="200"
                value={arrayLength}
                onChange={(e) => setArrayLength(Number(e.target.value))}
                className="w-full"
                disabled={isSorting}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Algorithm
              </label>
              <select
                value={selectedAlgorithm}
                onChange={(e) =>
                  setSelectedAlgorithm(e.target.value as SortAlgorithm)
                }
                className="w-full bg-slate-700 text-white p-2 rounded"
                disabled={isSorting}
              >
                <option value="bubble">Bubble Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="insertion">Insertion Sort</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleStart}
              disabled={isSorting}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start
            </button>
            <button
              onClick={handleReset}
              disabled={isSorting}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl h-96 flex items-end justify-center gap-[2px]">
            {numbers.map((num, index) => (
              <div
                key={index}
                className="flex-1 bg-green-500 transition-all duration-150"
                style={{
                  height: `${num / 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SortSimulation;
