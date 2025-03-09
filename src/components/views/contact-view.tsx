import { motion } from "framer-motion"
import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
import { contactInfo, personalInfo } from "../../constants"
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon } from "../icons"
import { AbsoluteBackground, Heading, MainButton } from "../ui"

const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div
      id="contact"
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
          Contact Me
        </Heading>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: -50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Get In Touch
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="bg-blue-50 p-3 rounded-full transition-all duration-300 group-hover:bg-blue-100">
                      <MailIcon className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                        Email
                      </h4>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="bg-blue-50 p-3 rounded-full transition-all duration-300 group-hover:bg-blue-100">
                      <GithubIcon className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                        GitHub
                      </h4>
                      <a
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {contactInfo.github.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group">
                    <div className="bg-blue-50 p-3 rounded-full transition-all duration-300 group-hover:bg-blue-100">
                      <LinkedinIcon className="size-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                        LinkedIn
                      </h4>
                      <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {contactInfo.linkedin.replace("https://", "")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Send Me a Message
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <MainButton type="submit" className="w-full">
                      <SendIcon className="size-4" />
                      Send Message
                    </MainButton>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 w-full max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex justify-center space-x-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative p-4 bg-white rounded-full shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative p-4 bg-white rounded-full shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactView
