import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Profile from "./Profile";
import About from "./About";
import Container from "./Container";



function App() {

  return (
  <Container> 
    <BrowserRouter>
      <div className="App">
        <h1>Context API</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/users" component={Users}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/about" component={About}/>
    </Switch>

      </div>
    </BrowserRouter>

    </Container>
  );
}

export default App;
