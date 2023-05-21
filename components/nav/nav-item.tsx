import Link from "next/link"
import React from "react"

const NavItem = ({
	text = "",
	href = "",
	anchor = false,
	icon,
}: {
	text: string
	href: string
	anchor: boolean
	icon: React.ReactNode
}) => {
	return (
		<li className="w-10 h-10 text-white bg-gray-400 rounded-full flex justify-center items-center cursor-pointer z-50 opacity-70">
			{anchor ? (
				<a
					href={href}
					rel="noreferrer noopener"
					target="_blank"
					className="w-full h-full flex justify-center items-center"
				>
					{icon}
				</a>
			) : (
				<Link href={href}>
					<a className="w-full h-full flex justify-center items-center">
						{icon}
					</a>
				</Link>
			)}
		</li>
	)
}

export default NavItem
