import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { DroppedCard } from "./DroppedCard"
import { NavBar } from "../nav/NavBar";

export const DroppedList = () => {
  const { watchlists, getWatchlists } = useContext(WatchlistContext)
  const history = useHistory()

  useEffect(() => {
    getWatchlists()
  }, [])


  return (
    <>
    <img className = "wwl_page_img" src="https://res.cloudinary.com/kor0sensei/image/upload/v1629129324/Capstone%20Images/WeebWatchList_ukh95t.png"></img>
    <NavBar />
    <h2 className="moreWatchlistH2">Dropped</h2>
    <button className ="addAnimeButton" onClick={() => {history.push("/watchlist/create")}}>
    Add Anime to Watch List
    </button>
    <div className="watchlist__dropped">
      {
        watchlists.map(watchlist => {
            if (
                watchlist.userId == localStorage.getItem("weeb_user") && watchlist.dropped === true && watchlist.dateStarted !== "" && watchlist.userEpCount !== ""
          ){        return <DroppedCard key={watchlist.id} watchlist={watchlist} />
        }})
      }
    </div>
    </>
  )
}