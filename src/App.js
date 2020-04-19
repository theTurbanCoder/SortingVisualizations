import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import './App.css';
import SortingVisualizer from './components/SortingVisualizer';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';





const trackingID = "UA-164002348-1"


ReactGA.initialize(trackingID)
const history = createBrowserHistory()

history.listen((location) => {
 
  ReactGA.set({page: location.pathname})
  ReactGA.pageview(location.pathname)
})


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
            <Route exact path='/' component={SortingVisualizer} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
