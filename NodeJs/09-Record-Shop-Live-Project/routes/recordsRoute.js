const express = require("express")

const router = express.Router()

const {getAllRecords,postAddNewRecord} = require("../controllers/recordsController")

/* GET ALL RECORDS FROM RESOURCES */
router.get("/", getAllRecords )

/* POST REQUEST TO ADD NEW RECORD */
router.post("/", postAddNewRecord)

/* PUT REQUEST TO UPDATE SIGNLE RECORD IN DATABASE */
/* router.put("/:id", (req,res,next)=>{

}) */

/* DEFAULT EXPORT */
module.exports = router