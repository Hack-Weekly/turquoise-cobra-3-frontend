import Image from "next/image"

const names = [
  "Secretmapper",
  "Deraidos",
  "wikiloud",
  "Miggy",
  "Rags",
  "Bhavil Jain",
]

export default function AboutCard() {
  return (
    <>
      {names.length > 0 ? (
        names.map((name) => (
          <div
            className="rounded flex flex-col gap-1 items-center border border-white p-4"
            key={name}
          >
            <Image
              className=""
              src={`https://robohash.org/${name}.png?set=set4`}
              width={200}
              height={200}
              alt="profile picture"
            />
            <p>{name}</p>
          </div>
        ))
      ) : (
        <p>None</p>
      )}
    </>
  )
}
