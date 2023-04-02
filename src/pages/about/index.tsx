import Link from "next/link";
import AboutCard from "../components/AboutCard";


export default function TheTeam() {
  return (
    <div className="flex flex-col items-center">
      <h1>The Team</h1>
      <p className="text-center"><Link href="/">Home</Link></p>

      {/* <div className="flex flex-col flex-wrap w-full justify-center md:flex-row gap-4"> */}
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AboutCard />
      </div>
    </div>
  )
}
