const initialState= {
    counter:5,
    data:["item1","item2"],
    fetchedData:[]
}


const Reducer=(state=initialState, action)=>{
    console.log(action)
   switch(action.type){
       case "increment":
           return {...state, counter:state.counter+action.payload}
        case "decrement":
            return {...state,counter:state.counter-action.payload}
        case "add":
            return {...state, data:[...state.data,action.payload]}
        case "remove":
           /*  const copydata=[...state.data]
            copydata.splice(action.payload,1)
            return {...state, data:copydata} */
            return {...state, data:state.data.filter((item,i)=>i!==action.payload)}
        case "fetch":
            return {...state, fetchedData:action.payload}

        default:
            return state
   } 
}

export default Reducer;
