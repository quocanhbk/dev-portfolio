import React from "react"

const SkillsView: React.FC = () => {
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center p-8" id="skills">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="w-full max-w-4xl">
        {/* TODO: Implement Skills content */}
        <p className="text-xl text-center mb-8">
          TODO: Add skill categories and progress bars or skill cards showing proficiency levels.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skill categories will go here */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Frontend</h3>
            {/* Frontend skills will go here */}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Backend</h3>
            {/* Backend skills will go here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsView
