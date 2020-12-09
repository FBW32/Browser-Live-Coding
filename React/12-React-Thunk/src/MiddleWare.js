import {increment,dataFetch} from "./Actions"

/* dispatch => thunk => reducer */
export const incrementAsnc=()=>{
    return (dispatch)=>{
          setTimeout(()=>{
            dispatch(increment())
          },1000)  
    }
  /*   abc() =>{ type:"increment"} */
}

export const dataFetchAsync=(url)=>{
    return (dispatch)=>{
        fetch(url)
        .then(res=>res.json())
        .then(result=> dispatch ( dataFetch(result) ) )

    }
}