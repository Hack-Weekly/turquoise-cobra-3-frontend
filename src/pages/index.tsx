import Head from "next/head"
import { useEffect, useState } from "react"

export default function Home() {
  const [vans, setVans] = useState([])
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
  }, [])

  const vansCards = vans.map((van: any) => {
    return (
      <div
        key={van.id}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <img className="rounded-t-lg" src={van.imageUrl} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {van.name}
          </h5>

          <p className="mb-3 text-sm text-gray-900 dark:text-gray-300">
            Written by {van.author}
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {van.description}.
          </p>
          <a
            href={`/blog/${van.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    )
  })

  return (
    <>
      <Head>
        <title>Cobra Blog</title>
        <meta name="description" content="Cobra Blog by team Turquoise Cobra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>This is Home</h1>
        <div className="flex-auto container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {vansCards}
        </div>
      </main>
    </>
  )
}