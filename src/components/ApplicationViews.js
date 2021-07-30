import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimeProvider } from "./anime/AnimeProvider"
import { AnimeList } from "./anime/AnimeList"
import { AnimeDetail } from "./anime/AnimeDetails"
import { WatchlistProvider } from "./watchlist/WatchlistProvider"
import { WatchlistListing } from "./watchlist/WatchlistListing"
import { WatchlistForm } from "./watchlist/WatchlistForm"
import { WatchingList } from "./watching/WatchingList"
import { FinishedList } from "./finished/FinishedList"
import { DroppedList } from "./dropped/DroppedList"
import { PlanToWatchList } from "./plantowatch/PlanToWatchList"


export const ApplicationViews = () => {
    return(
        <>
            <AnimeProvider>
                <Route exact path="/">
                    <Home />
                    <AnimeList />
                </Route>

                <Route exact path="/anime/detail/:animeId(\d+)">
                    <AnimeDetail />
                </Route>

            </AnimeProvider>
            

            <AnimeProvider>
                <WatchlistProvider>
                    <Route exact path="/watchlist">
                        <WatchlistListing />
                    </Route>

                    <Route path="/watchlist/create">
                        <WatchlistForm />
                    </Route>

                    <Route path="/watchlists/edit/:watchlistId(\d+)">
                        <WatchlistForm />
                    </Route>
                </WatchlistProvider>
            </AnimeProvider>

            <AnimeProvider>
                <WatchlistProvider>
                    <Route exact path="/watching">
                        <WatchingList />
                    </Route>
                </WatchlistProvider>
            </AnimeProvider>

            <AnimeProvider>
                <WatchlistProvider>
                    <Route exact path="/finished">
                        <FinishedList />
                    </Route>
                </WatchlistProvider>
            </AnimeProvider>

            <AnimeProvider>
                <WatchlistProvider>
                    <Route exact path="/dropped">
                        <DroppedList />
                    </Route>
                </WatchlistProvider>
            </AnimeProvider>

            <AnimeProvider>
                <WatchlistProvider>
                    <Route exact path="/plantowatch">
                        <PlanToWatchList />
                    </Route>
                </WatchlistProvider>
            </AnimeProvider>
        </>
    )
}