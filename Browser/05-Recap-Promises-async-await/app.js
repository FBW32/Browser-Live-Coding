const fetch = require("node-fetch");
 // synchoronous code


/* console.log("I am fetching data from server");

//Asynchronous code
fetch("https://reqres.in/api/users?page=1")
  .then((res) => res.json())
  .then((result) => {
    console.log(result.data[0]);
    console.log("fetching data for second page");
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((final) => console.log(final.data[0]))
      .catch(err=>console.log(err));
  });

console.log("we finished with data fetching"); */



 async function a(){
     try{
        console.log("I am fetching data from server");
        const res = await fetch("https://reqres.in/api/users?page=1")
        const result = await res.json()
        console.log(result.data[0])
        console.log("fetching data from second page")
        const response = await fetch("https://reqres.in/api/users?page=2")
        const final = await response.json()
        console.log(final.data[0])
        console.log("we finished with data fetching");
     }
     catch(err){
         console.log(err)
     }
}

a()
console.log("testing")
console.log("testing1")
console.log("testing2")
console.log("testing3")