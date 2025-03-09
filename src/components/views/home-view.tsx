import { Variants, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"
import { personalInfo } from "../../constants"

const HomeView = () => {
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

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } },
  }

  return (
    <div
      ref={ref}
      id="home"
      className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-blue-200 blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-30"></div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col justify-center items-center min-h-[100dvh] p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="mb-6 inline-block" variants={itemVariants}>
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25"></div>
              <div className="relative px-6 py-2 bg-white rounded-lg leading-none flex items-center">
                <span className="text-blue-600 font-medium">Hello, World!</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight"
            variants={itemVariants}
          >
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {personalInfo.name.split(" ").pop()}
            </span>
          </motion.h1>

          <motion.div className="text-2xl md:text-3xl text-slate-700 mb-8 h-16" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                personalInfo.title,
                2000,
                "Building Modern Web Apps",
                2000,
                "Creating Blockchain Solutions",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium"
            />
          </motion.div>

          <motion.p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
            {personalInfo.bio}
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-6" variants={itemVariants}>
            <Link
              to="/projects"
              className="group relative px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-20"></div>
              <span className="relative flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                View My Work
              </span>
            </Link>
            <Link
              to="/contact"
              className="group relative px-8 py-4 overflow-hidden rounded-lg bg-white border-2 border-blue-600 text-blue-600 shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-10"></div>
              <span className="relative flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Me
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white rounded-full shadow-lg hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group p-3 bg-white rounded-full shadow-lg hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
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
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HomeView
