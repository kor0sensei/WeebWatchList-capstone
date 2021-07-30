import React, { useContext } from "react"
import { WatchlistContext } from "./WatchlistProvider"
import { useHistory } from "react-router-dom"
import "./Watchlist.css"

export const WatchListCard = ({ watchlist }) => {

const { deleteWatchlist } = useContext(WatchlistContext)

const history = useHistory()

return(
<>
    <section className="watchlist__card">
        <h3 className="watchlist__name">{watchlist.anime.title}</h3>
        <div className="watchlist__userEpCount"> Eps Watched {watchlist.userEpCount} <button className="addEpButton">+</button></div>
        <button className="editButton" onClick={() => { history.push(`/watchlists/edit/${watchlist.id}`)}}>Edit</button>
        <button className="deleteButton" onClick={ event => {deleteWatchlist(watchlist.id) }}>Remove from Watchlist</button>
    </section>
</>
)}