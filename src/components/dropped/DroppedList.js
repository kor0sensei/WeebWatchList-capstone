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
    <h2 className="moreWatchlistH2">Dropped</h2>
    <button className ="addAnimeButton" onClick={() => {history.push("/watchlist/create")}}>
    Add Anime to Watch List
    </button>
    <div className="watchlist__dropped">
      {
        watchlists.map(watchlist => {
            if (
                watchlist.userId == localStorage.getItem("weeb_user") && watchlist.dropped === true && watchlist.dateStarted !== ""
          ){        return <DroppedCard key={watchlist.id} watchlist={watchlist} />
        }})
      }
    </div>
    </>
  )
}