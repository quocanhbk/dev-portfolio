import { motion } from "framer-motion"
import React from "react"
import { useInView } from "react-intersection-observer"
import { personalInfo, skills } from "../../constants"
import { Heading, SubHeading } from "../ui/heading"

// Import skill icons

interface SkillProps {
  name: string
  icon: string
  index: number
}

const Skill: React.FC<SkillProps> = ({ name, icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      id="skills"
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{
        delay: 0.1 * index,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      whileHover={{ y: -10 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
        <div className="w-20 h-20 mb-4 p-2 rounded-full bg-blue-50 flex items-center justify-center">
          <img src={icon} alt={name} className="w-12 h-12" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{name}</h3>
      </div>
    </motion.div>
  )
}

const SkillsView: React.FC = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [certRef, certInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      id="skills"
      className="relative min-h-dvh py-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-blue-200 blur-3xl opacity-40"></div>

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
        <Heading initial={{ y: -50 }} animate={{ y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          Skills
        </Heading>

        <motion.div
          ref={sectionRef}
          className="w-full max-w-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.p
            className="text-xl text-center mb-16 text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            My technical expertise spans across frontend, backend, and blockchain development, focusing on creating
            efficient and elegant solutions.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <Skill key={skill.name} name={skill.name} icon={skill.icon} index={index} />
            ))}
          </div>

          <motion.div
            ref={certRef}
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={certInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <SubHeading>Certifications</SubHeading>

            <div className="flex justify-center mt-10">
              {personalInfo.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <div className="relative px-8 py-6 bg-white rounded-xl shadow-xl">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-slate-900">{cert.name}</h4>
                        <div className="flex items-center mt-1">
                          <span className="text-blue-600 font-semibold text-lg">{cert.score}</span>
                          <span className="mx-2 text-slate-400">•</span>
                          <span className="text-slate-500">
                            {cert.issuer}, {cert.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SkillsView
