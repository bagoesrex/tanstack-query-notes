"use client"

import { useEffect } from "react"
import { useCharacters } from "@/hooks/use-characters"

export default function Home() {
  const { fetchStatus, isPending, error, data } = useCharacters()

  useEffect(() => {
    console.log("Fetch status changed:", fetchStatus)
  }, [fetchStatus])

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data?.characters[4]?.name}</h1>
      <p>Fetch Status: {fetchStatus}</p>
    </div>
  )
}
