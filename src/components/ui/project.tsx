import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export interface ProjectProps {
  id: string
  name: string
  image: string
  description: string
  role: string
  technologies: string[]
}

// Project component
export const Project: React.FC<{ project: ProjectProps; index: number }> = ({ project, index }) => {
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
