import { motion } from "framer-motion"
import React from "react"

const AboutMeView: React.FC = () => {
  return (
    <motion.div
      className="min-h-[100dvh] flex flex-col justify-center items-center p-8 py-20 bg-white text-slate-800"
      id="about-me"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-slate-900"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="md:col-span-1 flex justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            {/* Replace with your actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
              LA
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-blue-600">La Quoc Anh</h3>
          <h4 className="text-xl text-slate-700 mb-6">Fullstack & Blockchain Developer</h4>

          <div className="space-y-4 text-slate-600">
            <p>
              Passionate developer specializing in fullstack and blockchain technologies with a strong foundation in
              Computer Science.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-blue-600">Location</h5>
              <p className="text-slate-700">Ho Chi Minh City</p>
            </div>
            <div>
              <h5 className="font-semibold text-blue-600">Email</h5>
              <p className="text-slate-700">quocanhbk17@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 max-w-4xl w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-900">GitHub Contributions</h3>
        <div className="bg-slate-50 p-4 rounded-lg shadow-lg overflow-hidden">
          <img src={`https://ghchart.rshah.org/quocanhbk`} alt="GitHub Contribution Chart" className="w-full h-auto" />
          <div className="mt-4 text-center">
            <a
              href="https://github.com/quocanhbk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View GitHub Profile
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AboutMeView
