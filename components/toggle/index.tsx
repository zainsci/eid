import React, { useEffect, useState } from "react"

import SunSvg from "components/svgs/sun.svg"
import MoonSvg from "components/svgs/moon.svg"

const Toggle = () => {
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
				{isDark ? <SunSvg /> : <MoonSvg />}
			</button>
		</div>
	)
}

export default Toggle
