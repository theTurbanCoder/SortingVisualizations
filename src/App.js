import React from "react"
import { HashRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import SortingVisualizer from "./components/SortingVisualizer"
import ReactGA from "react-ga"
import { createBrowserHistory } from "history"
import PathFindingVisualizer from "./components/PathFindingVisualizer"

const trackingID = "UA-164002348-1"
ReactGA.initialize(trackingID)
const history = createBrowserHistory()

history.listen((location) => {
 ReactGA.set({ page: location.pathname })
 ReactGA.pageview(location.pathname)
})

function App() {
 return (
  <div className='App'>
   <HashRouter history={history}>
    <Switch>
     <Route path='/pathFinder' component={PathFindingVisualizer} />
     <Route exact path='/' component={SortingVisualizer} />
    </Switch>
   </HashRouter>
  </div>
 )
}

export default App
