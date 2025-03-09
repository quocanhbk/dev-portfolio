import { motion } from "framer-motion"
import React from "react"
import { companies } from "../../constants"

// Company interface
interface CompanyProps {
  id: string
  name: string
  logo: string
  website: string
  description: string
  role: string
  period: string
  projects: ProjectProps[]
}

// Project interface
interface ProjectProps {
  id: string
  name: string
  image: string
  description: string
  role: string
  technologies: string[]
}

// Company component
const Company: React.FC<{ company: CompanyProps; index: number }> = ({ company, index }) => {
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row gap-12 mb-32 last:mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
    >
      {/* Company info - on the left */}
      <div className="md:w-1/3 md:sticky md:top-24 md:self-start">
        <div className="flex items-center mb-6">
          <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-lg mr-4" />
          <div>
            <h3 className="text-xl font-bold text-blue-600">{company.name}</h3>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline"
            >
              {company.website.replace(/(^\w+:|^)\/\//, "")}
            </a>
          </div>
        </div>

        <p className="text-slate-600 mb-6">{company.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-slate-800">My Role</h4>
          <p className="text-slate-600">{company.role}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-800">Period</h4>
          <p className="text-slate-600">{company.period}</p>
        </div>
      </div>

      {/* Projects - displayed vertically */}
      <div className="md:w-2/3 space-y-16">
        {company.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
          >
            <div className="relative h-64 overflow-hidden mb-6 bg-slate-100">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h4 className="text-white font-bold text-xl p-6">{project.name}</h4>
              </div>
            </div>

            <div>
              <p className="text-slate-600 mb-4">{project.description}</p>

              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 text-sm">My Contribution</h5>
                <p className="text-slate-600">{project.role}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const ProjectsView: React.FC = () => {
  return (
    <motion.div
      className="min-h-[100dvh] py-20 bg-white text-slate-800"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-20 text-center text-slate-900"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-32">
          {companies.map((company, index) => (
            <Company key={company.id} company={company} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="https://github.com/quocanhbk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectsView
