import React from "react"
import { motion } from "framer-motion"

import Lamp01Svg from "components/svgs/2023/lamp01.svg"
import Lamp02Svg from "components/svgs/2023/lamp02.svg"
import StarSvg from "components/svgs/2023/star.svg"
import CrescentSvg from "components/svgs/2023/crescent.svg"
import EidUlFitrMubarak from "components/svgs/2023/eid-ul-fitr-mubarak.svg"
import MadeBy from "components/svgs/made-by.svg"
import Toggle from "components/toggle"

import Star01Svg from "components/svgs/2022/star01.svg"
import Layout from "components/layout"

const Eid = () => {
	return (
		<Layout title="Eid Mubarak - 1444/2023">
			<div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
				<div className="w-[30rem] h-[30rem] relative bg-gradient-to-tr from-slate-100 to-slate-200 flex flex-col justify-center items-center overflow-hidden text-gray-300 shadow-2xl shadow-teal-700 dark:from-slate-900 dark:to-slate-800">
					<h1 className="absolute text-blue-900 dark:text-blue-500 flex z-30 bottom-16 right-14">
						<EidUlFitrMubarak />
					</h1>
					<Lamp01 />
					<Lamp02 />
					<Crescent />
					<Star />
					<Star01 />
					<Toggle />
					<a
						href="https://zainsci.dev"
						className="absolute bottom-4 text-slate-500"
					>
						<MadeBy />
					</a>
				</div>
			</div>
		</Layout>
	)
}

export default Eid

function Lamp01() {
	return (
		<motion.div
			animate={{
				rotateZ: ["10deg", "-10deg", "10deg"],
				transformOrigin: "center top",
			}}
			transition={{
				duration: 6,
				repeat: Infinity,
				ease: "easeInOut",
				bounce: 0,
			}}
			className="absolute top-0 left-28 text-green-600"
		>
			<Lamp01Svg />
		</motion.div>
	)
}

function Lamp02() {
	return (
		<motion.div
			animate={{
				rotateZ: ["8deg", "-8deg", "8deg"],
				transformOrigin: "center top",
			}}
			transition={{
				duration: 10,
				repeat: Infinity,
				ease: "easeInOut",
				bounce: 0,
			}}
			className="absolute top-0 left-12 text-green-600"
		>
			<Lamp02Svg />
		</motion.div>
	)
}

function Crescent() {
	return (
		<motion.div
			animate={{
				rotateZ: ["10deg", "-10deg", "10deg"],
				transformOrigin: "center top",
			}}
			transition={{
				duration: 6,
				repeat: Infinity,
				ease: "easeInOut",
				bounce: 0,
			}}
			className="absolute top-0 left-40 text-yellow-500"
		>
			<CrescentSvg />
		</motion.div>
	)
}

function Star() {
	return (
		<motion.div
			animate={{
				rotateZ: ["-8deg", "8deg", "-8deg"],
				transformOrigin: "center top",
			}}
			transition={{
				duration: 6,
				repeat: Infinity,
				ease: "easeInOut",
				bounce: 0,
			}}
			className="absolute top-0 left-52 text-yellow-500"
		>
			<StarSvg />
		</motion.div>
	)
}

export function Star01() {
	return (
		<motion.div
			className="absolute bottom-0 text-purple-700 opacity-25 flex justify-center items-center w-full h-full"
			style={{
				minWidth: "30rem",
				minHeight: "30rem",
				maxWidth: "60vw",
				maxHeight: "60vw",
			}}
			initial={{
				translateY: "60%",
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
			<Star01Svg />
		</motion.div>
	)
}
