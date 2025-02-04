export interface SortControlProps {
  label: string
  children: React.ReactNode
  className?: string
}

const SortControl = ({ label, children, className }: SortControlProps) => {
  return (
    <div className={className}>
      <label className="block text-white text-sm font-medium mb-4">{label}</label>
      {children}
    </div>
  )
}

export default SortControl
