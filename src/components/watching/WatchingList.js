import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { WatchingCard } from "./WatchingCard"

export const WatchingList = () => {
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
    <h2>Watching</h2>
    <div className="watchlist">
      {
        watchlists.map(watchlist => {
            if (
                watchlist.userId == localStorage.getItem("weeb_user") && watchlist.dateStartedWatching !== "" && watchlist.dateFinishedWatching === "" && watchlist.dropped === false
          ){        return <WatchingCard key={watchlist.id} watchlist={watchlist} />
        }})
      }
    </div>
    </>
  )
}