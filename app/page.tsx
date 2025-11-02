"use client"

import { useCharacters } from "@/hooks/use-characters"

export default function Home() {
  const { isPending, error, data } = useCharacters()

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{JSON.stringify(data.characters[4].name)}</h1>
    </div>
  )
}
