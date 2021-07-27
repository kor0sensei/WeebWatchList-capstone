import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { AnimeContext } from "../anime/AnimeProvider"
import "./Watchlist.css"

export const WatchlistForm = () => {
  const { addWatchlist } = useContext(WatchlistContext)
  const { anime, getAnime } = useContext(AnimeContext)

  const [watchlist, setWatchlist] = useState({
    anime: "",
    finishedWatching: "",
    dateStartedWatching: "",
    dateFinishedWatching: "",
    userEpCount: "",
    droppedAnime: "",
  });

  const history = useHistory();

  useEffect(() => {
    getAnime()
}, [])

    


  const handleControlledInputChange = (event) => {

    const newWatchlist = { ...watchlist }

    newWatchlist[event.target.id] = event.target.value

    setWatchlist(newWatchlist)
  }

  const handleClickSaveWatchlist = (event) => {
    event.preventDefault()

      const newWatchlist = {
        anime: watchlist.anime,
        finishedWatching: watchlist.finishedWatching,
        dateStartedWatching: watchlist.dateStartedWatching,
        dateFinishedWatching: watchlist.dateFinishedWatching,
        userEpCount: watchlist.userEpCount,
        droppedAnime: watchlist.droppedAnime,
      }
      addWatchlist(newWatchlist)
        .then(() => history.push("/watchlist"))

  }

return (
    <>
      <form className="watchlistForm">
      <h2 className="watchlistForm__title">Add Anime to WatchList</h2>
      <fieldset>
          <div className="form-group">
            <label htmlFor="anime">Select an anime: </label>
            <select value={watchlist.animeId} name="animeId" id="watchlistAnime" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select an anime</option>
              {anime.map(anime => (
                <option key={anime.id} value={anime.id}>
                {anime.title}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
      <fieldset>
          <div className="form-group">
          <label htmlFor="userEpCount">Eps Seen:</label>
          <input type="text" id="userEpCount" required autoFocus className="form-control" value={watchlist.userEpCount} onChange={handleControlledInputChange} />
          {/* /{anime.find(animeObj => (
            {anime.epCount}
          ))} */}
          </div>
      </fieldset>
      <fieldset>
          <div className="form-group">
          <label htmlFor="dateStartedWatching">Date Started:</label>
          <input type="date" id="dateStartedWatching" required autoFocus className="form-control" value={watchlist.dateStartedWatching} onChange={handleControlledInputChange} />
          </div>
      </fieldset>
      <fieldset>
          <div className="form-group">
          <label htmlFor="dateFinishedWatching">Date Finished:</label>
          <input type="date" id="dateFinishedWatching" required autoFocus className="form-control" value={watchlist.dateFinishedWatching} onChange={handleControlledInputChange} />
          </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveWatchlist}>
          Save Anime to Watch List
          </button>
      </form>
  </>
)
}
// disabled={isLoading}

// useEffect(() => {
//     getAnime().then(() => {
//       if (animeId) {
//         getAnimeById(animeId)
//         .then(anime => {
//             setAnime(anime)
//             setIsLoading(false)
//         })
//       } else {
//         setIsLoading(false)
//       }
//     })
//   }, [])