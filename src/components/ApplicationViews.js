import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimeProvider } from "./anime/AnimeProvider"
import { AnimeList } from "./anime/AnimeList"
import { WatchlistProvider } from "./watchlist/WatchlistProvider"
import { WatchlistListing } from "./watchlist/WatchlistListing"
import { WatchlistForm } from "./watchlist/WatchlistForm"


export const ApplicationViews = () => {
    return(
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <AnimeProvider>
                <WatchlistProvider>
                    <Route exact path="/watchlist">
                        <WatchlistListing />
                    </Route>

                    <Route path="/watchlist/create">
                        <WatchlistForm />
                    </Route>
                </WatchlistProvider>
            </AnimeProvider>

            <AnimeProvider>
                <Route exact path="/currentlywatching">
                    <AnimeList />
                </Route>
            </AnimeProvider>

            <AnimeProvider>
                <Route exact path="/finished">
                    <AnimeList />
                </Route>
            </AnimeProvider>

            <AnimeProvider>
                <Route exact path="/dropped">
                    <AnimeList />
                </Route>
            </AnimeProvider>

            <AnimeProvider>
                <Route exact path="/plantowatch">
                    <AnimeList />
                </Route>
            </AnimeProvider>
        </>
    )
}