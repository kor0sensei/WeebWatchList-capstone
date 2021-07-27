import React, { useContext, useEffect } from "react"
import { AnimeContext } from "./AnimeProvider"
import { AnimeCard } from "./AnimeCard"
import "./Anime.css"

export const AnimeList = () => {
  const { anime, getAnime } = useContext(AnimeContext)

  useEffect(() => {
    getAnime()
  }, [])


  return (
    <div className="anime">
      {
        anime.map(anime => {
          return <AnimeCard key={anime.id} anime={anime} />
        })
      }
    </div>
  )
}