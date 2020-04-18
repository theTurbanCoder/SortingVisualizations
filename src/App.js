import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import SortingVisualizer from './components/SortingVisualizer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
            <Route exact path='/' component={SortingVisualizer} />
        </Switch>
      </HashRouter>
     
    </div>
  );
}

export default App;
