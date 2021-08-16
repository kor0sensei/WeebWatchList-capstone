import React, { useContext } from "react"
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { useHistory, Link } from "react-router-dom"
import "./Watching.css"

export const WatchingCard = ({ watchlist }) => {

const { deleteWatchlist } = useContext(WatchlistContext)

const history = useHistory()

return(
<>
    <section className="watchlist__watching__card">
    <Link to={`/anime/detail/${watchlist.anime.id}`}>
        <h3 className="detail_title">{watchlist.anime.title}</h3>
        </Link>
        <img className="anime__img" src={watchlist.anime.img} alt={watchlist.anime.title}/>
        <div className="watchlist__userEpCount"> Eps Watched {watchlist.userEpCount} / {watchlist.anime.epCount}</div>
        <div className="watchlist__userRating"> Your Rating {watchlist.userRating}/10</div>
        <button className="editButton" onClick={() => { history.push(`/watchlists/edit/${watchlist.id}`)}}>Edit</button>
        <button className="deleteButton" onClick={ event => {deleteWatchlist(watchlist.id) }}>Remove from Watchlist</button>
    </section>
</>
)}