import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AnimeContext } from "./AnimeProvider"
import "./Anime.css"

export const AnimeDetail = () => {

const { getAnimeById } = useContext(AnimeContext)

	const [anime, setAnime] = useState({})

	const {animeId} = useParams();

  useEffect(() => {
    getAnimeById(animeId)
    .then((response) => {
      setAnime(response)
    })
  }, [])

  return (
    <section className="anime__card">
      <h3 className="anime__name">{anime.title}</h3>
      <img className="anime__img" src={anime.img} alt={anime.title}/>
      <div className="anime__epCount">Ep Count: {anime.epCount}</div>
      <div className="anime__release">Season: {anime.seasonOfRelease} {anime.yearOfRelease}</div>
      <div className="anime__status">Status: {anime.status}</div>
    </section>
  )
}