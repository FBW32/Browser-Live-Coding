/* fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(result=>console.log(result))
.catch(err=>console.log(err))
console.log("hello") */

async function fetchData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("received data and parsing data");
    let result = await res.json();
    console.log("got final result");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

fetchData();

console.log("anything");
