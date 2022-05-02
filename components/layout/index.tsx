import React, { ReactChild } from "react"
import Head from "next/head"

import Nav from "components/nav"

interface IProps {
  title: string
  children?: React.ReactElement | React.ReactElement[]
}

const Layout = ({ title, children }: IProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="min-h-screen overflow-x-hidden relative">
        {children}
      </main>

      <footer></footer>
    </>
  )
}

export default Layout
