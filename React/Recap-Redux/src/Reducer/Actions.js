/* const fetchAction=(data)=>{
    return {type:"fetchedData", payload:data}
} */



const fetchUserData = (url) => {
//we are return this function to thunk middleware
//you have to return function within this function
 return  (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => dispatch({type:"fetch",payload:result}));
  }; 

};
export {fetchUserData}




