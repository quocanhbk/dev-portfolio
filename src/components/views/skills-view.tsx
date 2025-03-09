import { motion } from "framer-motion"
import React from "react"
import { personalInfo, skills } from "../../constants"

// Import skill icons

interface SkillProps {
  name: string
  icon: string
  index: number
}

const Skill: React.FC<SkillProps> = ({ name, icon, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <img src={icon} alt={name} className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-semibold text-slate-800">{name}</h3>
    </motion.div>
  )
}

const SkillsView: React.FC = () => {
  return (
    <motion.div
      className="min-h-[100dvh] flex flex-col justify-center items-center p-8 py-20 bg-white text-slate-800"
      id="skills"
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
        Skills
      </motion.h2>

      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <Skill key={skill.name} name={skill.name} icon={skill.icon} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experienced in building modern web applications with these technologies, focusing on clean code and
            efficient solutions.
          </p>
          {personalInfo.certifications.length > 0 && (
            <div className="mt-8">
              {personalInfo.certifications.map((cert, index) => (
                <div key={index} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md">
                  <span className="font-medium">
                    {cert.name}: {cert.score}
                  </span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SkillsView
