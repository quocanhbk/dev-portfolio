import React from "react"

const AboutMeView: React.FC = () => {
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center p-8" id="about-me">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <div className="max-w-3xl">
        {/* TODO: Implement About Me content */}
        <p className="text-xl text-center">
          TODO: Add personal information, background, education, and career journey here.
        </p>
      </div>
    </div>
  )
}

export default AboutMeView
