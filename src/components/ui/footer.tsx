import { contactInfo, personalInfo, portfolioRepository } from "@/constants"
import { CodeIcon, GithubIcon, LinkedinIcon, MailIcon } from "../icons"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">La Quoc Anh</h3>
            <p className="text-gray-300 mb-4 text-sm max-w-xs">{personalInfo.bio}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about-me" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <MailIcon className="size-5 text-gray-400" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CodeIcon className="size-5 text-gray-400" />
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              {contactInfo.linkedin && (
                <li className="flex items-center space-x-2">
                  <LinkedinIcon className="size-5 text-gray-400" />
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} La Quoc Anh. All rights reserved.</p>

          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Built with</span>
            <span className="text-blue-400">React</span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="text-blue-400">TypeScript</span>
            <span className="text-gray-400 mx-1">•</span>
            <span className="text-blue-400">TailwindCSS</span>
          </div>

          <a
            href={portfolioRepository}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mt-4 md:mt-0"
          >
            <GithubIcon className="size-4" />
            <p className="text-sm">View Source</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
