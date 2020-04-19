import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
    <React.Fragment>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />   
        </Switch>
      </Router>
    </React.Fragment>
  </div>
  );
}

export default App;
