import React from "react"
import "./Anime.css"

export const AnimeCard = ({ anime }) => (
    <section className="anime">
        <h3 className="anime__name">{anime.name}</h3>
    </section>
)