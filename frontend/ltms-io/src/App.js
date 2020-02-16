import React from 'react';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>LTMS.io</h1>
        <Switch>
          <Route path="/" exact component= { Home } />
          <Route path="/dashboard" component={ Dashboard } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
