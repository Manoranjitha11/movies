import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from './components/Movies';
import MovieDetail from './components/Movies/MovieDetail';

// Router components

function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route path="/" component={Movies} exact/>
            <Route path="/movieDetail/:movieId" component={MovieDetail} exact/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
