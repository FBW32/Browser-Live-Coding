import React from "react"
import "./css/App.scss"
import Navigation from "./components/Navigation"
import ToDosContainer from "./components/ToDosContainer"
import ToDonesContainer from "./components/ToDonesContainer"

//User interface (UI) unit (Component)

function App() {
  return (
    <div className="app">
      <Navigation/>
      <ToDosContainer/>
      <ToDonesContainer/>
    </div>
  );
}

export default App;
