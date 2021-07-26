import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimeProvider } from "./anime/AnimeProvider"
import { AnimeList } from "./anime/AnimeList"


export const ApplicationViews = () => {
    return(
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <AnimeProvider>
                <Route exact path="/watchlist">
                    <AnimeList />
                </Route>
            </AnimeProvider>


            <Route exact path="/currentlywatching">
                <AnimeList />
            </Route>


            <Route exact path="/finished">
                <AnimeList />
            </Route>


            <Route exact path="/dropped">
                <AnimeList />
            </Route>
                

            <Route exact path="/plantowatch">
                <AnimeList />
            </Route>
        </>
    )
}