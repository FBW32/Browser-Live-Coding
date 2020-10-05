// DOM
//dom is tree of nodes/elements created by browser.
//browser will take your html file and convert into a Model structure that structure is called DOM.
//in that model we have document object

//environments
//Node
//Browser
 //these are two hosts

//from Node you will get global Object
//from Browser you will get window object


/*  console.dir(document)
 console.log(document.URL)
 console.log(document.title)
 document.title = "Document Object Model Title"
 console.log(document.title)
 document.all[6].innerHTML= "changing heading"
 console.dir(document.all[6]) */

 console.log(window)


 //build in javascript object
/*  console.log
 setTimeout
 setInterval;
 new Date()
 new Object()
 classes
 function */ 

/*  let number1 = prompt("please enter first number")
 let number2 = prompt("please enter second number")
  console.log(typeof number1) 
 let n1 = parseInt(number1)
 let n2 = parseInt(number2)
 let sum = n1+n2
console.log(sum) */

let confirmStatus = confirm("do you want to enter more numbers")
console.log(confirmStatus)
if(confirmStatus){
    console.log("user selected Okay")
}else{
    console.log("user Selected Cancel")
}


/* window.alert
window.prompt
window.confirm */
