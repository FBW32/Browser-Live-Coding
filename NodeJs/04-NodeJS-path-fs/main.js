const path = require("path")
const fs = require("fs")


/* console.log(__filename)
console.log(path.extname(__dirname+"../public/text.txt"))
console.log(path.join(__dirname,"public","text.txt"))

console.log(path.join(__dirname,"../index.js"))
console.log(path.resolve(__dirname, "../index.js"))
console.log(__dirname)
console.log(process.cwd()) */

//asynchronous
/* fs.readFile(__dirname+"/public/text.txt" ,"utf8" , (err,data)=>{
        console.log(data)
}) */

//synchronous
/* let data = fs.readFileSync(__dirname+"/public/text.txt","utf8")
console.log(data) */


fs.writeFile(__dirname+"/text.txt","something else",(err){
  if(err) {
      console.log(err)
  }  
  else{
    console.log("data added into the text.txt file")
  }
} )

//synchronous
console.log("working with fs")