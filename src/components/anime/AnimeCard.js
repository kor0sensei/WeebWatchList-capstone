import React from "react"
import "./Anime.css"

export const AnimeCard = ({ anime }) => (
    <section className="anime__card">
        <h3 className="anime__name">{anime.title}</h3>
    </section>
)