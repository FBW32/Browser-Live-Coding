const initialState={
    count:0,
    data:[]
}
/* const fetchdata=async()=>{
    let response= await fetch("https://jsonplaceholder.typicode.com/posts")
    let result= await response.json()
    initialState.data=result
    console.log(initialState)
}

fetchdata() */





export default function Reducer(state=initialState,actions){
console.log(initialState)
    switch(actions.type){
        case "increment":
            return {...state, count:state.count+1}
        case "decrement":
            return {...state, count:state.count-1}
        case "fetch":
            return {...state, data:actions.payload}
        default:
            return state
    }
} 
