import { motion } from "framer-motion"
import React from "react"

interface ProjectProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  index: number
}

const Project: React.FC<ProjectProps> = ({ title, company, period, description, technologies, index }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-slate-700 font-medium">{company}</span>
          <span className="text-slate-500 text-sm">{period}</span>
        </div>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map(tech => (
            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const ProjectsView: React.FC = () => {
  const projects = [
    {
      title: "Decentralized Web Applications",
      company: "Blockpixels",
      period: "06/2023 - Current",
      description: "Building multi-chain dApps with Next.js and developing smart contracts on EVM chains.",
      technologies: ["Next.js", "Nest.js", "Solidity", "GraphQL"],
    },
    {
      title: "Fullstack Blockchain Applications",
      company: "Ather Labs",
      period: "09/2021 - 05/2023",
      description: "Designed and developed fullstack applications with Next.js and smart contracts.",
      technologies: ["Next.js", "React.js", "Solidity", "TypeScript"],
    },
    {
      title: "Internal Business Applications",
      company: "Trung Thuy Group",
      period: "03/2020 - 09/2021",
      description: "Developed internal applications using React.js and Node.js with PostgreSQL.",
      technologies: ["React.js", "Node.js", "PostgreSQL"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
      className="min-h-[100dvh] flex flex-col justify-center items-center p-8 py-20 bg-slate-50 text-slate-800"
      id="projects"
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
        Projects
      </motion.h2>

      <motion.div className="w-full max-w-6xl" variants={container} initial="hidden" animate="show">
        <motion.p className="text-xl text-center mb-12 text-gray-300" variants={item}>
          Here are some of the key projects I've worked on throughout my career.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              company={project.company}
              period={project.period}
              description={project.description}
              technologies={project.technologies}
              index={index}
            />
          ))}
        </div>

        <motion.div className="mt-16 text-center" variants={item}>
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
      </motion.div>
    </motion.div>
  )
}

export default ProjectsView
