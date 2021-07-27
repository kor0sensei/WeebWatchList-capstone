import React from "react"
import "./Watchlist.css"

export const WatchListCard = ({ watchlist }) => (
    <section className="watchlist__card">
        <h3 className="watchlist__name">{watchlist.anime.title}</h3>
    </section>
)