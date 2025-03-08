import React from "react"

const ContactView: React.FC = () => {
  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center p-8" id="contact">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <div className="w-full max-w-2xl">
        {/* TODO: Implement Contact form */}
        <p className="text-xl text-center mb-8">
          TODO: Add contact form with name, email, message fields and social media links.
        </p>
        <div className="bg-slate-800 p-6 rounded-lg">
          <form className="space-y-4">
            {/* Form fields will go here */}
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 flex justify-center space-x-6">{/* Social media icons will go here */}</div>
      </div>
    </div>
  )
}

export default ContactView
