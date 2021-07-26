import React, { useContext, useEffect } from "react"
import { AnimeContext } from "./AnimeProvider"
import { AnimeCard } from "./AnimeCard"
import "./Anime.css"

export const AnimeList = () => {
  const { animes, getAnimes } = useContext(AnimeContext)

  useEffect(() => {
    console.log("AnimeList: useEffect - getAnimes")
    getAnimes()
  }, [])


  return (
    <div className="animes">
      {console.log("AnimeList: Render", animes)}
      {
        animes.map(anime => {
          return <AnimeCard key={anime.id} anime={anime} />
        })
      }
    </div>
  )
}