import React, { useContext } from "react"
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { useHistory } from "react-router-dom"
import "./Finished.css"

export const FinishedCard = ({ watchlist }) => {

const { deleteWatchlist } = useContext(WatchlistContext)

const history = useHistory()

return(
<>
    <section className="watchlist__finished__card">
        <h3 className="watchlist__name">{watchlist.anime.title}</h3>
        <img className="anime__img" src={watchlist.anime.img} alt={watchlist.anime.title}/>
        <div className="watchlist__userEpCount"> Eps Watched {watchlist.userEpCount} <button className="addEpButton">+</button></div>
        <button className="editButton" onClick={() => { history.push(`/watchlists/edit/${watchlist.id}`)}}>Edit</button>
        <button className="deleteButton" onClick={ event => {deleteWatchlist(watchlist.id) }}>Remove from Watchlist</button>
    </section>
</>
)}