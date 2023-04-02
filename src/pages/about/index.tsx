import AboutCard from "../components/AboutCard";


export default function TheTeam() {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="mb-8">The Team</h1>

      <div className="flex flex-col flex-wrap w-full justify-center md:flex-row gap-4">
        <AboutCard />
      </div>
    </div>
  )
}