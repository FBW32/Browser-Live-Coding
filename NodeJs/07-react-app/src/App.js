import React from "react";

function App() {
  const fetchData = () => {
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((result) => console.log(result));
  };
  return (
    <div className="App">
      <h1>My React App</h1>
      <button onClick={fetchData}>get all users</button>
    </div>
  );
}

export default App;
