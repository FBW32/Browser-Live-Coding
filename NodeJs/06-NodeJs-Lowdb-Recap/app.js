//CommonJS/ES5 way to import modules
const express = require("express");
//initiallizing express server
const app = express();

const setCors = require("./middlewares/security")

const usersRoutes= require("./Routes/usersRoutes")
const indexRoute = require("./Routes/indexRoute")
//3000 is the development port and process.env.PORT is for production
const PORT = 3000 || process.env.PORT;

//express json middleware, to parse req.body 
app.use(express.json())
//use cors middle for my server
app.use(setCors)

app.use("/users",usersRoutes)
app.use("/",indexRoute)





/* app.post()
app.put()
app.patch()
app.delete() */

//listen all requests coming on this port.
app.listen(PORT, () => console.log("server is running on " + PORT + " port"));




//MVC
/* Model (database)
Views (pages display to client)
Controllers (handler which handle your request) */