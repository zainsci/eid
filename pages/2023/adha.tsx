import React, { useEffect } from "react"
import { useRouter } from "next/router"

const EidAlAdha2023 = () => {
	const router = useRouter()

	useEffect(() => {
		router.push("/")
	})

	return <div>EidAlAdha2023</div>
}

export default EidAlAdha2023
