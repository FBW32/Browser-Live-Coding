const router = require("express").Router()
const {Index} = require("../Controllers/indexController")


//create GET / route
router.get("/", Index);


module.exports = router