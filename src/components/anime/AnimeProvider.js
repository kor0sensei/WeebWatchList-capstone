import React, { useState, createContext } from "react"

export const AnimeContext = createContext()

export const AnimeProvider = (props) => {
    const [anime, setAnime] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getAnime = () => {
        return fetch("http://localhost:8088/anime")
        .then(res => res.json())
        .then(setAnime)
    }
    const getAnimeById = (id) => {
        return fetch(`http://localhost:8088/anime/${id}`)
        .then(res => res.json())
        }

    return (
        <AnimeContext.Provider value={{
            anime, getAnime, getAnimeById, searchTerms, setSearchTerms
        }}>
            {props.children}
        </AnimeContext.Provider>
    )
}