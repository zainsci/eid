import React from "react"
import { NextPage } from "next"

import Layout from "components/layout"
import Link from "next/link"

import StarSvg from "components/svgs/2022/star02.svg"
import MoonSvg from "components/svgs/2022/star.svg"

const Old: NextPage = () => {
	const oldOnes = [
		{
			title: "Eid Ul Fitr - 1433/2022",
			href: "/2022",
			icon: <StarSvg />,
			backgroundColor: "bg-purple-400",
			iconColor: "text-yellow-500",
		},
		{
			title: "Eid Ul Fitr - 1434/2023",
			href: "/2023",
			icon: <MoonSvg />,
			backgroundColor: "bg-blue-600",
			iconColor: "text-yellow-400",
		},
		{
			title: "Eid Ul Adha - 1434/2023",
			href: "/",
			icon: <StarSvg />,
			backgroundColor: "bg-teal-400",
			iconColor: "",
		},
	]
	return (
		<Layout title="Old Eid Projects - zainsci.dev">
			<div>
				<ul className="max-w-xl mx-auto space-y-8 mt-20">
					{oldOnes.map((item) => (
						<li
							key={item.title}
							className={`rounded-lg relative overflow-hidden ${item.backgroundColor}`}
						>
							{
								<Link href={item.href}>
									<a className="text-white px-4 py-6 rounded-2xl flex flex-col drop-shadow-md">
										{item.title}
										<div
											className={`absolute ${item.iconColor} z-50 w-40 h-40 -top-1/2 right-0`}
										>
											{item.icon}
										</div>
									</a>
								</Link>
							}
						</li>
					))}
				</ul>
			</div>
		</Layout>
	)
}

export default Old
