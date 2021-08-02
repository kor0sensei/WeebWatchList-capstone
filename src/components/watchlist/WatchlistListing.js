import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "./WatchlistProvider"
import { WatchListCard } from "./WatchlistCard"

export const WatchlistListing = () => {
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
    <h2>My Watch List</h2>
    <div className="watchlist">
      {
        watchlists.map(watchlist => {
            if (
                watchlist.userId == localStorage.getItem("weeb_user")
          ){        return <WatchListCard key={watchlist.id} watchlist={watchlist} />
        }})
      }
    </div>
    </>
  )
}