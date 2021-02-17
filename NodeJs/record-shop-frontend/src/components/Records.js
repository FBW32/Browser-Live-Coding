import React, { useContext, useEffect } from "react";
import { MyContext } from "../App";

export default function Records() {
  const { records, setRecords,token } = useContext(MyContext);

  useEffect(() => {
    fetch("http://localhost:4000/api/records", {
        method:"GET",
        headers:{"x-auth":token}
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []); //component did mount (execute once)

  return (
    <div>
      <h1>This is Records Page</h1>
    </div>
  );
}
