import { StandardButton } from "../ui/standard-button"

const HomeView = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-dvh" id="home">
      <h1 className="text-7xl font-black">Quoc Anh</h1>
      <p className="text-lg text-slate-100">Full-stack Developer</p>
      <div className="flex gap-8">
        <StandardButton className="w-48">Find out more</StandardButton>
        <StandardButton className="w-48">Contact me</StandardButton>
      </div>
    </div>
  )
}
export default HomeView
