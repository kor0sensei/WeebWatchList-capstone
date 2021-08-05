import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { PlanToWatchCard } from "./PlanToWatchCard"

export const PlanToWatchList = () => {
  const { watchlists, getWatchlists } = useContext(WatchlistContext)
  const history = useHistory()

  useEffect(() => {
    getWatchlists()
  }, [])


  return (
    <>
    <h2 className="watchlisth2">Plan to Watch</h2>
    <button className ="addAnimeButton"onClick={() => {history.push("/watchlist/create")}}>
    Add Anime to Watch List
    </button>
    <div className="watchlist__plantowatch">
      {
        watchlists.map(watchlist => {
            if (
                watchlist.userId == localStorage.getItem("weeb_user") && watchlist.dateStartedWatching === "" || watchlist.userEpCount === null
          ){        return <PlanToWatchCard key={watchlist.id} watchlist={watchlist} />
        }})
      }
    </div>
    </>
  )
}