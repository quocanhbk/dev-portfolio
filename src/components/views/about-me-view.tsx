import { motion } from "framer-motion"
import React from "react"
import { useInView } from "react-intersection-observer"
import { personalInfo } from "../../constants"

const AboutMeView: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] } },
  }

  return (
    <div
      id="about-me"
      className="relative min-h-dvh py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 -left-20 w-72 h-72 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptLTE4IDE4aDZ2LTZoLTZ2NnptMCAwaDZ2LTZoLTZ2NnptMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-slate-900 relative"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
          </span>
        </motion.h2>

        <motion.div
          ref={ref}
          className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="md:col-span-1 flex flex-col items-center" variants={itemVariants}>
            <div className="relative w-64 h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-md opacity-75 animate-pulse"></div>
              <div className="absolute inset-2 bg-white rounded-full"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-5xl font-bold">
                {personalInfo.name
                  .split(" ")
                  .map(name => name[0])
                  .join("")}
              </div>
            </div>

            <div className="w-full space-y-4 mt-4">
              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-blue-500/10 transition-shadow">
                <h5 className="font-semibold text-blue-600 mb-1">Location</h5>
                <p className="text-slate-700 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {personalInfo.location}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-blue-500/10 transition-shadow">
                <h5 className="font-semibold text-blue-600 mb-1">Email</h5>
                <p className="text-slate-700 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {personalInfo.email}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-blue-500/10 transition-shadow">
                <h5 className="font-semibold text-blue-600 mb-1">Education</h5>
                <p className="text-slate-700 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  {personalInfo.education.major}, {personalInfo.education.university.split(" ").slice(-2).join(" ")}
                </p>
                <p className="text-slate-500 text-sm ml-6">{personalInfo.education.period}</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-blue-500/10 transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-4"></div>
                <div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {personalInfo.name}
                  </h3>
                  <h4 className="text-xl text-slate-700">{personalInfo.title}</h4>
                </div>
              </div>

              <div className="space-y-6 text-slate-600">
                <p className="text-lg leading-relaxed">{personalInfo.bio}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Embracing Simplicity</h4>
                    <p className="text-slate-600 text-sm">Develop simple, efficient solutions for complex problems</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Prioritizing Cleanliness</h4>
                    <p className="text-slate-600 text-sm">Maintain clean and well-organized code</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Commitment to Learning</h4>
                    <p className="text-slate-600 text-sm">Continuously expand knowledge in technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 max-w-5xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-slate-900 relative inline-block">
            GitHub Contributions
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
          </h3>

          <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-blue-500/10 transition-shadow overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 rounded-lg"></div>
              <img
                src={`https://ghchart.rshah.org/${personalInfo.github.split("/").pop()}`}
                alt="GitHub Contribution Chart"
                className="w-full h-auto relative z-10"
              />
            </div>

            <div className="mt-6 text-center">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
    </div>
  )
}

export default AboutMeView
