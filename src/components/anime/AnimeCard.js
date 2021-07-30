import React from "react"
import "./Anime.css"
import { Link } from "react-router-dom"

export const AnimeCard = ({ anime }) => (
    <section className="anime__card">
        <Link to={`/anime/detail/${anime.id}`}>
           <h3> { anime.title } </h3>
        </Link>
    </section>
)