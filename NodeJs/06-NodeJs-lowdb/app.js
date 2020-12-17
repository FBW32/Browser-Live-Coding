const express = require("express")
const morgan = require("morgan")
const app = express()

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
 
// Set some defaults
/* db.defaults({users:[]})
.write() */
   //save data

//using middlewares
app.use(morgan("dev"))
app.use(express.json())


app.get("/", (req,res)=>{
    console.log("received get request on /")
    res.send("Hello from server")
})

//crud operation
//Create ...
// Read ....
//Update
//Delete

app.get("/users",(req,res)=>{
    //get data from db.json
    let users = db.get("users").value()
    res.json({data:users,success:true})
})

// /users/2
app.get("/users/:id",(req,res)=>{
    console.log(req.params)
    //we convert our req.param into a number
    let idParam = parseInt(req.params.id)
    //get specific user find by id
    let user = db.get("users").find({id:idParam}).value()
    
    if(user){
      res.json({user:user, success:true})  
    }else{
        res.json({error: "no such user found in database", success:false}) 
    }
    
})
 
app.post("/users", (req,res)=>{
    console.log(req.body)
    //add user into databse(db.json)
    db.get("users").push(req.body).write()  //store data
    res.json({message:"user added into database", success:true})
})



app.listen(3000, ()=>console.log("server is running"))