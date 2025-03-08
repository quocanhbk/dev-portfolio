import React from "react"

const ProjectsView: React.FC = () => {
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center p-8" id="projects">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="w-full max-w-6xl">
        {/* TODO: Implement Projects content */}
        <p className="text-xl text-center mb-8">
          TODO: Add project cards with descriptions, technologies used, and links to GitHub/live demos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{/* Project cards will go here */}</div>
      </div>
    </div>
  )
}

export default ProjectsView
