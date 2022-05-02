import React from "react"
import { motion, useCycle } from "framer-motion"

import NavItem from "components/nav/nav-item"
import Menu from "components/svgs/menu.svg"
import Close from "components/svgs/close.svg"

const Nav = () => {
  const [showNav, setShowNav] = useCycle(false, true)

  const navItems = [
    { text: "Home", href: "/", anchor: false },
    { text: "Portfolio", href: "https://zainsci.dev", anchor: true },
    { text: "Older Projects", href: "/old", anchor: false },
  ]

  return (
    <>
      <motion.div
        whileHover={{
          rotateZ: "90deg",
        }}
        className={`absolute w-8 h-8 md:w-12 md:h-12 top-10 right-10 md:top-10 md:right-10 z-50 flex justify-center items-center rounded-full cursor-pointer ${
          showNav ? "hover:bg-white hover:text-amber-700" : "text-white"
        }`}
        onClick={() => setShowNav()}
      >
        {showNav ? <Close /> : <Menu />}
      </motion.div>

      <motion.nav
        variants={{
          initial: {
            x: "100%",
          },
          open: {
            x: 0,
          },
          closed: {
            x: "100%",
          },
        }}
        animate={showNav ? "open" : "closed"}
        initial="initial"
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
          duration: 0.5,
        }}
        className="w-screen h-screen absolute top-0 left-0 bottom-0 right-0 bg-purple-500 text-white z-40"
      >
        <ul className="flex flex-col h-full w-full justify-center items-center text-center font-display">
          {navItems.map((item, i) => (
            <NavItem {...item} key={i} />
          ))}
        </ul>
      </motion.nav>
    </>
  )
}

export default Nav
