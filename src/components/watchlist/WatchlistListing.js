import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "./WatchlistProvider"
import { WatchListCard } from "./WatchlistCard"
import "./Watchlist.css"

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
    <div className="watchlist">
      {
        watchlists.map(watchlist => {
          return <WatchListCard key={watchlist.id} watchlist={watchlist} />
        })
      }
    </div>
    </>
  )
}