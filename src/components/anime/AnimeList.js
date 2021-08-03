import React, { useContext, useEffect, useState } from "react"
import { AnimeContext } from "./AnimeProvider"
import { AnimeCard } from "./AnimeCard"
import "./Anime.css"

export const AnimeList = () => {
  const { anime, getAnime, searchTerms } = useContext(AnimeContext)
  const [ filteredAnime, setFiltered ] = useState([])

  useEffect(() => {
    getAnime()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = anime.filter(anime => anime.title.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      setFiltered(anime)
    }
  }, [searchTerms, anime])


  return (
    <div className="anime">

    <h3>Anime</h3>
      {
        filteredAnime.map(anime => {
          return <AnimeCard key={anime.id} anime={anime} />
        })
      }
    </div>
  )
}