import React from "react";
import {connect ,useSelector} from "react-redux"

function Grandchild1() {
    const counter = useSelector(state=>state.counter)
  return (
    <div>
      <h3>This is a Grandchild1</h3>
      <h3>Counter : {counter} </h3>
    </div>
  );
}

/* const MapStateToPtops=(state)=>{
    return { counter : state.counter }
}

export default connect(MapStateToPtops)(Grandchild1) */

export default Grandchild1;