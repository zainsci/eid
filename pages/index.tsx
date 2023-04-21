import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

import Lamp01Svg from "components/svgs/2023/lamp01.svg"
import Lamp02Svg from "components/svgs/2023/lamp02.svg"
import StarSvg from "components/svgs/2023/star.svg"
import CrescentSvg from "components/svgs/2023/crescent.svg"
import EidUlFitrMubarak from "components/svgs/2023/eid-ul-fitr-mubarak.svg"
import MadeBy from "components/svgs/made-by.svg"

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
					<ThemeToggle />
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

function ThemeToggle() {
	const [isDark, setIsDark] = useState(false)

	useEffect(() => {
		if (isDark) {
			document.documentElement.className = ""
		} else {
			document.documentElement.className = "dark"
		}
	}, [isDark])

	function handleThemeChange() {
		if (isDark) {
			setIsDark(false)
		} else {
			setIsDark(true)
		}
	}

	return (
		<div className="absolute top-6 right-6">
			<button
				onClick={handleThemeChange}
				className="w-8 h-8 text-gray-500 dark:text-gray-100 bg-gray-300 dark:bg-gray-700 rounded-full flex justify-center items-center"
			>
				{isDark ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-sun"
					>
						<circle cx="12" cy="12" r="5"></circle>
						<line x1="12" y1="1" x2="12" y2="3"></line>
						<line x1="12" y1="21" x2="12" y2="23"></line>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
						<line x1="1" y1="12" x2="3" y2="12"></line>
						<line x1="21" y1="12" x2="23" y2="12"></line>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-moon"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				)}
			</button>
		</div>
	)
}

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
