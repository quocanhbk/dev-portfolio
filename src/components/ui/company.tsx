import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CompanyInfo } from "./company-info"
import { Project, ProjectProps } from "./project"

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

export const Company: React.FC<{ company: CompanyProps; index: number }> = ({ company, index }) => {
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
          <CompanyInfo
            logo={company.logo}
            name={company.name}
            website={company.website}
            description={company.description}
            role={company.role}
            period={company.period}
          />
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
