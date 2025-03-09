import { CalendarIcon, ExternalLinkIcon, WorkIcon } from "../icons"

interface CompanyInfoProps {
  logo: string
  name: string
  website: string
  description: string
  role: string
  period: string
}

export const CompanyInfo = ({ logo, name, website, description, role, period }: CompanyInfoProps) => {
  return (
    <div className="relative md:sticky md:top-24 md:w-2/5 self-start">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-25"></div>
        <div className="relative bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 bg-blue-50 flex items-center justify-center">
              <img src={logo} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {name}
              </h3>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline flex items-center"
              >
                <ExternalLinkIcon className="w-4 h-4 mr-1" />
                {website.replace(/(^\w+:|^)\/\//, "")}
              </a>
            </div>
          </div>

          <p className="text-slate-600 mb-6">{description}</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 flex items-center">
                <WorkIcon className="w-4 h-4 mr-2 text-blue-500" />
                Position
              </h4>
              <p className="text-slate-600 ml-6">{role}</p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-blue-500" />
                Period
              </h4>
              <p className="text-slate-600 ml-6">{period}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
