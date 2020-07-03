import React from 'react';
import './App.css';
import Login from './page/login'
import Home from './page/home'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <h1>app</h1> */}
      <Router>
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
