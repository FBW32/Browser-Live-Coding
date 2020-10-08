let h = document.querySelector("h1")
h.classList.add("heading")

let form = document.querySelector("form")
form.style.cssText="width:400px;margin:0 auto;"

let ul = document.querySelector("ul")
ul.style.cssText="margin:0 auto;"

let lis = document.querySelectorAll("li")
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
    tasks.map(task=>{
        //creating li
        let li= document.createElement("li")
        //adding class to li
        li.classList.add("list")
        li.innerHTML=task.text
        li.style.backgroundColor=task.status?"green":"gray"
    
        let span = document.createElement("span")
        span.innerHTML="X"
        span.style.cssText="position:absolute;right:30px"
    
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

    ul.innerHTML=""
    input.value=""
    updateTasks()

    

})



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