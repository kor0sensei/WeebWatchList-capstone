export const ApplicationViews = () => {
    return(
        <>
            <Route exact path="/">
                <Home />
            </Route>
                <Route exact path="/watchlist">
                    <WatchList />
                </Route>

                <Route exact path="/currentlywatching">
                    <WatchList />
                </Route>

                <Route exact path="/finished">
                    <WatchList />
                </Route>

                <Route exact path="/dropped">
                    <WatchList />
                </Route>
                
                <Route exact path="/plantowatch">
                    <WatchList />
                </Route>
        </>
    )
}