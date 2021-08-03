import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { FinishedCard } from "./FinishedCard"

export const FinishedList = () => {
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
    <h2>Finished</h2>
    <div className="watchlist__finished">
      {
        watchlists.map(watchlist => {
            if (
                watchlist.userId == localStorage.getItem("weeb_user") && watchlist.dateFinishedWatching !== "" && watchlist.dropped === false
          ){        return <FinishedCard key={watchlist.id} watchlist={watchlist} />
        }})
      }
    </div>
    </>
  )
}