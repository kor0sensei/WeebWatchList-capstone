import React, { useContext } from "react"
import { AnimeContext } from "./AnimeProvider"
import "./Anime.css"

export const AnimeSearch = () => {
  const { setSearchTerms } = useContext(AnimeContext)

  return (
    <>
      Anime search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for an Anime... " />
    </>
  )
}