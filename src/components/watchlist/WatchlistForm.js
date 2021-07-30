import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { WatchlistContext } from "../watchlist/WatchlistProvider"
import { AnimeContext } from "../anime/AnimeProvider"
import "./Watchlist.css"

export const WatchlistForm = () => {
  const { addWatchlist, getWatchlistById, updateWatchlist, getWatchlists } = useContext(WatchlistContext)

  const { anime, getAnime } = useContext(AnimeContext)

  const [watchlist, setWatchlist] = useState({
    animeId: "",
    finishedWatching: "",
    dateStartedWatching: "",
    dateFinishedWatching: "",
    userEpCount: "",
    dropped: "",
  });

  
  useEffect(() => {
      getWatchlists()
    }, [])
    
    const [isLoading, setIsLoading] = useState(true);
    const { watchlistId } = useParams();
    const history = useHistory();

    const handleCheckBox = () => {
      updateWatchlist({
          id: watchlist.id,
          animeId: watchlist.animeId,
          dateStartedWatching: watchlist.dateStartedWatching,
          dateFinishedWatching: watchlist.dateFinishedWatching,
          userEpCount: watchlist.userEpCount,
          dropped: true,
          userId: watchlist.userId
      })
      .then(() => history.push("/watchlist"))
  }


  const handleControlledInputChange = (controlWatchlist) => {

    const newWatchlist = { ...watchlist }
    let selectedVal = controlWatchlist.target.value
        
    if (controlWatchlist.target.id.includes("Id")) {
     selectedVal = parseInt(selectedVal)
    }
     newWatchlist[controlWatchlist.target.id] = selectedVal
     setWatchlist(newWatchlist)
  }

const handleClickSaveWatchlist = (controlWatchlist) => {
    controlWatchlist.preventDefault()
    if (watchlist.animeId === "") {
      window.alert("Please select an Anime")
  } else {
      setIsLoading(true);

 if  (watchlistId){
    updateWatchlist({
        id: watchlistId,
        animeId: parseInt(watchlist.animeId),
        dateStartedWatching: watchlist.dateStartedWatching,
        dateFinishedWatching: watchlist.dateFinishedWatching,
        userEpCount: parseInt(watchlist.userEpCount),
        dropped: watchlist.dropped,
        userId: parseInt(localStorage.getItem("weeb_user"))
    })
    .then(() => history.push("/watchlist"))
} else {
      addWatchlist({
        animeId: parseInt(watchlist.animeId),
        dateStartedWatching: watchlist.dateStartedWatching,
        dateFinishedWatching: watchlist.dateFinishedWatching,
        userEpCount: parseInt(watchlist.userEpCount),
        dropped: false,
        userId: parseInt(localStorage.getItem("weeb_user"))
    })
    .then(() => history.push("/watchlist"))
    }
  }}

  useEffect(() => {
    getAnime().then(() => {
      if (watchlistId) {
        getWatchlistById(watchlistId)
        .then(watchlist => {
            setWatchlist(watchlist)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    })
  }, [])

return (
    <>
      <form className="watchlistForm">
      <h2 className="watchlistForm__title">{watchlistId ? "Update Watchlist" : "Add Anime to Watchlist" }</h2>
      <fieldset>
          <div className="form-group">
            <label htmlFor="anime">Select an anime: </label>
            <select value={watchlist.animeId} name="animeId" id="animeId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select an anime</option>
              {anime.map(anime => (
                <option key={anime.id} value={anime.id}>
                {anime.title} Ep Count {anime.epCount}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
      <fieldset>
          <div className="form-group">
          <label htmlFor="userEpCount">Eps Seen:</label>
          <input type="text" id="userEpCount" required autoFocus className="form-control" value={watchlist.userEpCount} onChange={handleControlledInputChange} />
          {/* /{anime.find(animeobj => (
          <label key={anime.id} value={anime.id}>
              {animeobj.epCount}
          </label>
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
      <fieldset>
          <div className="form-group">
          <label htmlFor="checkbox">Mark as Dropped</label>
            <input type="checkbox" id="checkbox" unchecked="" onChange={handleCheckBox} />
          </div>
      </fieldset>
      <button className="btn btn-primary" disabled={isLoading} onClick={handleClickSaveWatchlist}>
      {watchlistId ? "Update Watchlist" : "Add Anime to Watchlist" }
          </button>
      </form>
  </>
)
}