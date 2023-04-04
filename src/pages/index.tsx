import Head from "next/head"
import { useEffect, useState } from "react"
import Blog from "./blogs"

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Cobra Blog</title>
        <meta name="description" content="Cobra Blog by team Turquoise Cobra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className="h-full bg-turquoise-100 m-0 p-0">
          
        <Blog />
      </main>
    </>
  )
}
