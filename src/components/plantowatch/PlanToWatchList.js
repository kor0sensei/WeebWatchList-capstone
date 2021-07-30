import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { WatchListCard } from "../watchlist/WatchlistCard"
import "../watchlist/Watchlist.css"

export const PlanToWatchList = () => {
  const { watchlists, getWatchlists } = useContext(WatchlistContext)
  const history = useHistory()

  useEffect(() => {
    getWatchlists()
  }, [])


  return (
    <>
    <button onClick={() => {history.push("/watchlist/create")}}>
    Add Anime to Watch List
    </button>
    <h2>Plan to Watch</h2>
    <div className="watchlist">
      {
        watchlists.map(watchlist => {
            if (
                watchlist.userId == localStorage.getItem("weeb_user") && watchlist.dateStartedWatching === ""
          ){        return <WatchListCard key={watchlist.id} watchlist={watchlist} />
        }})
      }
    </div>
    </>
  )
}