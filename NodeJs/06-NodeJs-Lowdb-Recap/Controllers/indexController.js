const path = require("path")

exports.Index = (request, response) => {
    console.log("I am Main Server Route");
    console.log(path.resolve(__dirname,"../views/index.html"))
    let users=["Naqvi","Misbah","Ben","Aghy"]
    let login = true;
    //use to send static html file to the client
     /* response.sendFile(path.resolve(__dirname,"../views/index.html")); */ 
    response.render("index", { users ,login }) //compile template and send html file to the client
    } 


/*   const Index = (request, response) => {
    console.log("I am Main Server Route");
    response.send("Hi from Server");
  } 

  module.exports={Index} */