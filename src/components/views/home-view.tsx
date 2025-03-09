import { Variants, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"
import { personalInfo } from "../../constants"
import { GithubIcon, MailIcon, WorkIcon } from "../icons"
import { AbsoluteBackground, MainButton, SecondaryButton } from "../ui"

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
      <AbsoluteBackground />

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
            <Link to="#projects">
              <MainButton>
                <WorkIcon className="w-5 h-5" />
                View My Work
              </MainButton>
            </Link>
            <Link to="#contact">
              <SecondaryButton>
                <MailIcon className="w-5 h-5" />
                Contact Me
              </SecondaryButton>
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
              <GithubIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group p-3 bg-white rounded-full shadow-lg hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <MailIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HomeView
