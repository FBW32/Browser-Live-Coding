const path = require("path")

exports.Index = (request, response) => {
    console.log("I am Main Server Route");
    console.log(path.resolve(__dirname,"../views/index.html"))
     response.sendFile(path.resolve(__dirname,"../views/index.html")); 
  } 


/*   const Index = (request, response) => {
    console.log("I am Main Server Route");
    response.send("Hi from Server");
  } 

  module.exports={Index} */