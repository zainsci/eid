import Link from "next/link"
import React from "react"

const NavItem = ({
  text = "",
  href = "",
  anchor = false,
}: {
  text: string
  href: string
  anchor: boolean
}) => {
  return (
    <li className="w-full flex text-4xl md:text-6xl font-extrabold uppercase select-none">
      {anchor ? (
        <a
          href={href}
          rel="noreferrer noopener"
          target="_blank"
          className="min-w-full p-8 hover:bg-purple-400"
        >
          {text}
        </a>
      ) : (
        <Link href={href}>
          <a className="min-w-full p-8 hover:bg-purple-400">{text}</a>
        </Link>
      )}
    </li>
  )
}

export default NavItem
