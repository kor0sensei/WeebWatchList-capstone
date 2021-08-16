import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom';
import { AnimeContext } from "./AnimeProvider"
import { NavBar } from "../nav/NavBar";
import "./Anime.css"

export const AnimeDetail = () => {

  const { getAnimeById } = useContext(AnimeContext)

  const history = useHistory()

	const [anime, setAnime] = useState({})

	const {animeId} = useParams();

  useEffect(() => {
    getAnimeById(animeId)
    .then((response) => {
      setAnime(response)
    })
  }, [])

  return (
    <>
    <NavBar />
    <section className="anime__detail__card">
      <h3 className="anime__name">{anime.title}</h3>
      <img className="anime__img" src={anime.img} alt={anime.title}/>
      <div className="anime__epCount">Ep Count: {anime.epCount}</div>
      <div className="anime__release">Season: {anime.seasonOfRelease} {anime.yearOfRelease}</div>
      <div className="anime__status">Status: {anime.status}</div>
      <div className="anime__synopsis">Synopsis: {anime.synopsis}</div>
      <button className="addAnimeButton"onClick={() => {history.push("/")}}>
    Go Back
    </button>
      <button className="addAnimeButton"onClick={() => {history.push("/watchlist/create")}}>
    Add Anime to Watch List
    </button>
    </section>
    </>
  )
}