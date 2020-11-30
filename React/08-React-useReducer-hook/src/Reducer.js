
export const initialValue=0;
export const reducer=(state,action)=>{
    console.log(action)
    console.log(state)
    switch(action){
      case "increment":
        return state+1;
      case "decrement":
        return state-1;
      case "reset":
        return initialValue;
    }
}


/* export {initialValue,reducer} */