import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { personalInfo, workingStyles } from "../../constants"
import { GithubIcon, LocationIcon, MailIcon, UniversityIcon } from "../icons"
import { AbsoluteBackground, Heading, SubHeading } from "../ui"

const AboutMeView = () => {
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
      <AbsoluteBackground />

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          About Me
        </Heading>

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
                  <LocationIcon className="size-4 mr-2 text-blue-500" />
                  {personalInfo.location}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-blue-500/10 transition-shadow">
                <h5 className="font-semibold text-blue-600 mb-1">Email</h5>
                <p className="text-slate-700 flex items-center">
                  <MailIcon className="size-4 mr-2 text-blue-500" />
                  {personalInfo.email}
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-blue-500/10 transition-shadow">
                <h5 className="font-semibold text-blue-600 mb-1">Education</h5>
                <p className="text-slate-700 flex items-center">
                  <UniversityIcon className="size-4 mr-2 text-blue-500" />
                  {personalInfo.education.university}
                </p>
                <p className="text-slate-500 text-sm ml-6">{personalInfo.education.major}</p>
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
                  {workingStyles.map((style, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-600 mb-2">{style.name}</h4>
                      <p className="text-slate-600 text-sm">{style.description}</p>
                    </div>
                  ))}
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
          <SubHeading>GitHub Contributions</SubHeading>

          <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-blue-500/10 transition-shadow overflow-hidden">
            <div className="relative">
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
                <GithubIcon className="size-4 mr-2" />
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
