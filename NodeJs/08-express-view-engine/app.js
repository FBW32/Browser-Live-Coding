const express = require("express")


const app = express()
//express.json middleware
app.use(express.json())
//parsing formdata getting directly from form
app.use(express.urlencoded({extended:true}))

//we are setting view engine for our server
app.set("view engine","ejs")
/* app.set("views","./views") */


let user = "";
let isLogin=false;

app.get("/",(req,res)=>{
    //render is compiling your template file into plain html file
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",(req,res)=>{
    console.log(req.body)
    const {username,password}= req.body

    if(username==="ali"&&password==="123"){
        user=username
        isLogin=true
       res.redirect("/profile")
    }else{
        res.redirect("/")
    }
})

app.get("/profile",(req,res)=>{
    if(isLogin){
      res.render("profile",{name:user})  
    }else{
        res.redirect("/login")
    }
    
})
app.get("/logout",(req,res)=>{
    isLogin=false;
    user=""
    res.redirect("/")
})


app.listen(3000, ()=>console.log("server is running on port 3000"))