import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRoute as Router } from "react-router-dom"
import { WeebWatchList } from "./components/WeebWatchList.js" 
import "./index.css"


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <WeebWatchList />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
