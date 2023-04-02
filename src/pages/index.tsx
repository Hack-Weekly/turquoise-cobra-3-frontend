import Head from "next/head"
import { useEffect, useState } from "react"
import Header from "./header"
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
      <main>
        <Header />                      
        <Blog />
      </main>
    </>
  )
}
