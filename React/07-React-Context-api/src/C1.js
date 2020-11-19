import React from "react";
import { MyContext } from "./App";

export default function C1() {
  return (
    <MyContext.Consumer>
      { (data) => {
          console.log(data)
        return (
          <div>
            <h3>This is Second Grandchild of App</h3>
            <h3>I received this Data from Second Child ({data.SecondGrandChild})</h3>
          </div>
        );
      } }
    </MyContext.Consumer>
  );
}
