import React, { useState, createContext } from "react"

export const WatchlistContext = createContext()

export const WatchlistProvider = (props) => {
    const [watchlists, setWatchlists] = useState([])

    const getWatchlists = () => {
        return fetch("http://localhost:8088/watchlists?_expand=anime")
        .then(res => res.json())
        .then(setWatchlists)
    }

    const getWatchlistById = (id) => {
        return fetch(`http://localhost:8088/watchlists/${id}`)
        .then(res => res.json())
        }

    const addWatchlist = watchlistObj => {
        return fetch("http://localhost:8088/watchlists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(watchlistObj)
        })
        .then(getWatchlists)
        }

        const deleteWatchlist = watchlistId => {
            return fetch(`http://localhost:8088/watchlists/${watchlistId}`, {
              method: "DELETE"
            })
              .then(getWatchlists)
        }

        const updateWatchlist = watchlist => {
            return fetch(`http://localhost:8088/watchlists/${watchlist.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(watchlist)
            })
              .then(getWatchlists)
          }

    return (
        <WatchlistContext.Provider value={{
            watchlists, getWatchlists, setWatchlists, getWatchlistById, addWatchlist, updateWatchlist, deleteWatchlist
        }}>
            {props.children}
        </WatchlistContext.Provider>
    )
}