import { motion } from "framer-motion"
import React from "react"
import { useInView } from "react-intersection-observer"
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

// Project component
const Project: React.FC<{ project: ProjectProps; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        delay: 0.1 * index,
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
    >
      <div className="relative h-64 overflow-hidden mb-6 rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 group-hover:opacity-0 transition-opacity duration-500"></div>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <h4 className="text-white font-bold text-xl p-6 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
            {project.name}
          </h4>
        </div>
      </div>

      <div>
        <p className="text-slate-600 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        <div className="mb-4">
          <h5 className="font-semibold text-blue-600 text-sm mb-2">My Contribution</h5>
          <p className="text-slate-600 text-sm">{project.role}</p>
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
  )
}

// Company component
const Company: React.FC<{ company: CompanyProps; index: number }> = ({ company, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      className="w-full"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="relative"
        initial={{ y: 100 }}
        animate={inView ? { y: 0 } : { y: 100 }}
        transition={{
          delay: 0.1 * index,
          duration: 0.7,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <div className="flex flex-col md:flex-row gap-12 mb-24 last:mb-0">
          {/* Company info - on the left */}
          <div className="md:w-1/3 relative">
            <div className="sticky top-24">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 bg-blue-50 flex items-center justify-center">
                      <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        {company.name}
                      </h3>
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        {company.website.replace(/(^\w+:|^)\/\//, "")}
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6">{company.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 flex items-center">
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
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        My Role
                      </h4>
                      <p className="text-slate-600 ml-6">{company.role}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 flex items-center">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Period
                      </h4>
                      <p className="text-slate-600 ml-6">{company.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects - displayed vertically */}
          <div className="md:w-2/3 space-y-16">
            {company.projects.map((project, idx) => (
              <Project key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjectsView: React.FC = () => {
  return (
    <div
      id="projects"
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
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-slate-900 relative inline-block"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="relative inline-block">
            Work Experience
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
          </span>
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
            className="relative inline-flex items-center px-8 py-4 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg group"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View More Projects on GitHub
            </span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ProjectsView
