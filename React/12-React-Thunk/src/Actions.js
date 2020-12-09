export const increment =()=>{
    return ({type:"increment"})
}

export const decrement =()=>{
    return ({type:"decrement"})
}


export const dataFetch=(data)=>{
    return {type:"fetch",payload:data}
}
