import React, { useState, createContext } from "react"

export const AnimeContext = createContext()

export const AnimeProvider = (props) => {
    const [animes, setAnimes] = useState([])

    const getAnimes = () => {
        return fetch("http://localhost:8088/animes")
        .then(res => res.json())
        .then(setAnimes)
    }

    const addAnime = animeObj => {
        return fetch("http://localhost:8088/animes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animeObj)
        })
        .then(getAnimes)
    }

    return (
        <AnimeContext.Provider value={{
            animes, getAnimes, addAnime
        }}>
            {props.children}
        </AnimeContext.Provider>
    )
}