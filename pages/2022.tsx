import React from "react"
import { motion } from "framer-motion"

import Layout from "components/layout"
import EidText from "components/svgs/2022/eid.svg"
import MubarakText from "components/svgs/2022/mubarak.svg"
import StarIcon from "components/svgs/2022/star.svg"
import MoonIcon from "components/svgs/2022/moon.svg"
import StarShape01 from "components/svgs/2022/star01.svg"
import StarShape02 from "components/svgs/2022/star02.svg"
import MadeBy from "components/svgs/2022/made-by.svg"

export default function Eid2022() {
	return (
		<Layout title="Eid Mubarak - 1443/2022">
			<div className="min-w-screen min-h-screen p-8 flex bg-purple-500">
				<div className="relative border-4 w-full flex justify-center items-center overflow-hidden bg-gradient-radial from-purple-400 to-purple-600">
					<div className="w-full h-full text-5xl md:text-7xl font-display z-10 flex flex-col justify-center items-center">
						<div className="flex flex-col md:flex-row items-center gap-8">
							<div className="relative w-44 md:w-60 h-auto flex justify-center items-start">
								<div className="text-yellow-2022">
									<Moon />
								</div>
								<div className="absolute md:relative top-0 right-0 text-teal-2022">
									<Star />
								</div>
							</div>

							<div className="w-60 flex flex-col justify-center items-center md:items-end gap-4">
								<div className="w-32 md:w-44">
									<EidText />
								</div>
								<div className="w-44 md:w-60">
									<MubarakText />
								</div>
							</div>
						</div>
						<h1 className="text-2xl mt-12">Eid Ul Fitr Mubarak</h1>

						<a
							href="https://zainsci.dev"
							rel="noopener noreferrer"
							target="_blank"
							className="text-sm text-white absolute bottom-6"
						>
							<MadeBy />
						</a>
					</div>

					<Star01 />
					<Star02 />
				</div>
			</div>
		</Layout>
	)
}

export function Star() {
	return (
		<motion.div
			animate={{
				rotateZ: ["10deg", "10deg", "-10deg", "-10deg", "10deg"],
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				ease: "linear",
			}}
			className="w-10 h-10 md:w-14 md:h-14"
		>
			<StarIcon />
		</motion.div>
	)
}

export function Moon() {
	return (
		<motion.div
			animate={{
				rotateZ: ["10deg", "10deg", "-10deg", "-10deg", "10deg"],
			}}
			transition={{
				duration: 3,
				repeat: Infinity,
				ease: "linear",
			}}
			className="w-44 h-44 md:w-56 md:h-56"
		>
			<MoonIcon />
		</motion.div>
	)
}

export function Star01() {
	return (
		<motion.div
			className="absolute top-0 right-0 text-purple-600 md:text-teal-2022 opacity-60 flex justify-center items-center w-full h-full"
			style={{
				minWidth: "30rem",
				minHeight: "30rem",
				maxWidth: "60vw",
				maxHeight: "60vw",
			}}
			initial={{
				translateX: "50%",
				translateY: "-50%",
			}}
			animate={{
				rotateZ: "360deg",
			}}
			transition={{
				duration: 40,
				repeat: Infinity,
				ease: "linear",
			}}
		>
			<StarShape01 />
		</motion.div>
	)
}

export function Star02() {
	return (
		<motion.div
			className="absolute bottom-0 left-0 opacity-60 flex justify-center items-center w-full h-full text-purple-400 md:text-yellow-2022"
			style={{
				minWidth: "20rem",
				minHeight: "20rem",
				maxWidth: "40vw",
				maxHeight: "40vw",
			}}
			initial={{
				translateX: "-50%",
				translateY: "50%",
			}}
			animate={{
				rotateZ: "360deg",
			}}
			transition={{
				duration: 20,
				repeat: Infinity,
				ease: "linear",
			}}
		>
			<StarShape02 />
		</motion.div>
	)
}
