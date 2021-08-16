import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { FinishedCard } from "./FinishedCard"
import { NavBar } from "../nav/NavBar";

export const FinishedList = () => {
  const { watchlists, getWatchlists } = useContext(WatchlistContext)
  const history = useHistory()

  useEffect(() => {
    getWatchlists()
  }, [])


  return (
    <>
    <img className = "wwl_page_img" src="https://res.cloudinary.com/kor0sensei/image/upload/v1629129324/Capstone%20Images/WeebWatchList_ukh95t.png"></img>
    <NavBar />
    <h2 className="moreWatchlistH2">Finished</h2>
    <button className ="addAnimeButton" onClick={() => {history.push("/watchlist/create")}}>
    Add Anime to Watch List
    </button>
    <div className="watchlist__finished">
      {
        watchlists.map(watchlist => {
            if (
                watchlist.userId == localStorage.getItem("weeb_user") && watchlist.dateFinishedWatching !== "" && watchlist.dropped === false && watchlist.userEpCount !== ""
          ){        return <FinishedCard key={watchlist.id} watchlist={watchlist} />
        }})
      }
    </div>
    </>
  )
}