import React from "react";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <ErrorBoundary>
        <Hero hero="Superman" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero hero="Spiderman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero hero="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
