const express = require("express")


const app = express()
//express.json middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//we are setting view engine for our server
app.set("view engine","ejs")
/* app.set("views","./views") */


let user = "Ali";
let isLogin=false;

app.get("/",(req,res)=>{
    //render is compiling your template file into plain html file
    res.render("index", {name:user})
})
app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",(req,res)=>{
    console.log(req.body)
})

app.listen(3000, ()=>console.log("server is running on port 3000"))