/* EXTERNAL MODULES */
const express = require("express")
const morgan = require("morgan")
const indexRoute = require("./routes/indexRoute")
const recordsRoute = require("./routes/recordsRoute")

/* INIT : creating express server*/
const app = express()

/* in express all the controllers are the middlewares */

/* USE MIDDLEWARES */
/* app.use(here specify middleware) */
app.use(morgan("dev"))


/* ROUTES */
 app.use("/", indexRoute ) 
 app.use("/api/records", recordsRoute)




/* Listening Port */
app.listen(3000, ()=>console.log("server is running"))

/* MVC modal views controller (pattern) */
 