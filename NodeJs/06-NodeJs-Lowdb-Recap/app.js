//CommonJS/ES5 way to import modules
const express = require("express");
//initiallizing express server
const app = express();
const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
//create a json file
const adopter = new FileSync("db.json");

const db = lowdb(adopter);
// Set some defaults
/* db.defaults({
  users: [
    { id: 1, name: "Naqvi" },
    { id: 2, name: "Joseph" },
  ],
}).write() */;//save data into that file

//3000 is the development port and process.env.PORT is for production
const PORT = 3000 || process.env.PORT;

const MiddleWare = (req, res, next) => {
  console.log(req);
  console.log("I am a MiddleWare");
  if (req.method === "GET" || req.method==="POST") {
    console.log("received get Request");
    next();
  } else {
    res.send("please send only get/post request");
  }
};

/* app.use(MiddleWare); */
//express json middleware, to parse req.body 
app.use(express.json())

//create GET / route
app.get("/", (request, response) => {
  console.log("I am Main Server Route");
  response.send("Hi from Server");
});

//get single user from database
app.get("/users/:id",(req,res)=>{
    let idParam= parseInt(req.params.id)
    let user = db.get("users").find({id:idParam}).value() 
    res.json({success:true,user:user})
    
})
//Crud operation 
//reading data from database
/* http://localhost:3000/users */
app.get("/users", (req,res)=>{
    //get all users from lowdb
    let users = db.get("users").sortBy("id").value()
    //sending reponse to our client
    res.json({users:users})
    //end process 
})


//create/add data into your database
app.post("/users",(req,res)=>{
   console.log(req.body)
   //adding and storing data in lowdb
   db.get("users").push(req.body).write()
    res.json({success:true, message:"data stored"})
})

//update data into our database
app.patch("/users/:id",(req,res)=>{
        console.log(req.params)
        let idParam = parseInt(req.params.id)

        db.get("users")
        .find({id:idParam})
        .assign(req.body)
        .write()

        res.json({success:true,message:"user updated"})
})


//delete all users
app.delete("/users",(req,res)=>{
    db.get("users").remove().write()
    res.json({success:true,message:"all users Deleted"})
})
//Delete data from database

app.delete("/users/:id", (req,res)=>{
    let idParam= parseInt(req.params.id)
    db.get("users").remove({id:idParam}).write()

    res.json({success:true,message:"record deleted"})
})

/* app.post()
app.put()
app.patch()
app.delete() */

//listen all requests coming on this port.
app.listen(PORT, () => console.log("server is running on " + PORT + " port"));
