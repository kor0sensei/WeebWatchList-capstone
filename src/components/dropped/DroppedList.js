import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { DroppedCard } from "./DroppedCard"

export const DroppedList = () => {
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
    <h2>Dropped</h2>
    <div className="watchlist">
      {
        watchlists.map(watchlist => {
            if (
                watchlist.userId == localStorage.getItem("weeb_user") && watchlist.dropped === true 
          ){        return <DroppedCard key={watchlist.id} watchlist={watchlist} />
        }})
      }
    </div>
    </>
  )
}