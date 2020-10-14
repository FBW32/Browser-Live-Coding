let h = document.querySelector("h1")

let form = document.querySelector("form")
form.style.cssText="width:400px;margin:0 auto;"

let ul = document.querySelector("ul")
ul.style.cssText="margin:0 auto;"

let inp = document.querySelector("input")

//attaching event listener to our form
form.addEventListener("submit",(e)=>{
    //normal behaviour of form is to refresh page
    //prevent dafault behaviour of our form
    e.preventDefault()

    //this is our text comming from input
    console.dir(inp.value)
//creating li
    let li = document.createElement("li")
// adding class to our li
    li.classList.add("list")
li.addEventListener("click",()=>{
    console.log("user Clicked on li")
})

    //creating span
    let span= document.createElement("span") //<span></span>
    span.innerHTML="X"//<span>X</span>

span.addEventListener("click",()=>{
    console.log("user clicked on span")
})


/* span.onclick= ()=>{
    console.log("user clicked on span")
} */
    //adding html text into li
    li.innerHTML= inp.value
    {/* <li class="list"> task 2</li> */}
    //appending our span in our li
    li.append(span) 
    {/* <li class="list"> task 2 <span>X</span> </li> */}

    //appending our li into our ul
    ul.append(li)

    //clear out the input field
    inp.value=""

/*     let lis = document.querySelectorAll("li")
console.dir(lis)
lis.forEach(li=>{
    li.addEventListener("click",()=>{
        console.log("user clicked on li")
    })
}) */
} )





































/* let lis = document.querySelectorAll("li")
lis.forEach(li=>{
    li.classList.add("list")
})
let spans=document.querySelectorAll("span")
spans.forEach(span=>{
    span.style.cssText="position:absolute;right:30px"
})

let input = document.querySelector("input")


let tasks = [
   {id:0, text:"Task 1", status:false},
    {id:1, text:"Task 2", status:false}, 
]

const updateTasks=()=>{
    ul.innerHTML=""
    tasks.map(task=>{
        //creating li
        let li= document.createElement("li")
        //adding class to li
        li.classList.add("list")
        li.innerHTML=task.text
        li.style.backgroundColor=task.status?"green":"gray"
        let span = document.createElement("span")
        span.innerHTML="X"
        span.style.cssText="position:relative;right:30px"
        li.append(span)
    
        ul.append(li)
    
    })
}

updateTasks()

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let task= {
        id:tasks.length, 
        text:input.value,
        status:false
    }
    tasks.push(task)

    
    input.value=""
    updateTasks()   

}) */



/* form.addEventListener("submit", (e)=>{
    //prevent default behaviour of the form
    e.preventDefault()
  //value in the input field
    console.log(input.value, "from input")
    console.dir(input)
//creating li
    let li= document.createElement("li")
    li.classList.add("list")
    li.innerHTML=input.value
    let span = document.createElement("span")
    span.innerHTML="X"
    span.style.cssText="position:absolute;right:30px"
    li.append(span)

    ul.append(li)
    //clear input field value
    input.value=""

    let li= `<li>${input.value} <span>X<span></li>`
    ul.append(li)

}) */