import React, { useEffect } from "react"
import { useRouter } from "next/router"

export default function Eid() {
  const router = useRouter()
  
  useEffect(() => {
    router.push("/2023/adha")
  },[])

	return <div>Eid</div>
}
