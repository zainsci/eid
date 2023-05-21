import React from "react"
import { motion, useCycle } from "framer-motion"

import NavItem from "components/nav/nav-item"
import Menu from "components/svgs/menu.svg"
import Close from "components/svgs/close.svg"

import HomeSvg from "components/svgs/home.svg"
import UserSvg from "components/svgs/user.svg"
import FolderSvg from "components/svgs/folder.svg"
import ArchiveSvg from "components/svgs/archive.svg"

const Nav = () => {
	const [showNav, setShowNav] = useCycle(false, true)

	const navItems = [
		{ text: "Home", href: "/", anchor: false, icon: <HomeSvg /> },
		{
			text: "Portfolio",
			href: "https://zainsci.dev",
			anchor: true,
			icon: <UserSvg />,
		},
		{
			text: "Older Projects",
			href: "https://projects.zainsci.dev/",
			anchor: true,
			icon: <FolderSvg />,
		},
		{
			text: "Archive",
			href: "/archive",
			anchor: false,
			icon: <ArchiveSvg />,
		},
	]

	return (
		<nav className="absolute top-8 right-8 flex justify-center items-center p-4">
			<button
				className={`w-10 h-10 p-1 text-white bg-gray-400 rounded-full flex justify-center items-center cursor-pointer z-50 opacity-70`}
				onClick={() => setShowNav()}
			>
				{showNav ? <Close /> : <Menu />}
			</button>

			<motion.ul
				className={`absolute top-16 z-50 space-y-2 px-4`}
				animate={{
					scaleY: showNav ? "100%" : 0,
					transformOrigin: "top",
				}}
			>
				{navItems.map((item) => (
					<NavItem {...item} key={item.href} />
				))}
			</motion.ul>
		</nav>
	)
}

export default Nav
