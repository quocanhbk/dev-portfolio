export const AbsoluteBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-blue-200 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-30"></div>
    </div>
  )
}
