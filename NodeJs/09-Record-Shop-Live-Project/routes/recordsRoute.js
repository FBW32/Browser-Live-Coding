const express = require("express")

const router = express.Router()

const {getAllRecords,postAddNewRecord,putUpdateRecord,deleteSingleRecord,getSingleRecord} = require("../controllers/recordsController")
const recordsRules= require("../lib/validationRules4records")
const Validation = require("../middlewares/validation")
const { auth } = require("../middlewares/anthentication")

/* GET ALL RECORDS FROM RESOURCES */
router.get("/", auth ,getAllRecords )

/* POST REQUEST TO ADD NEW RECORD */
router.post("/", Validation(recordsRules), postAddNewRecord)

/* PUT REQUEST TO UPDATE SIGNLE RECORD IN DATABASE */
router.put("/:id",putUpdateRecord )

/* DELETE REQUEST TO DELETE SIGNLE RECORD IN DATABASE */
router.delete("/:id",deleteSingleRecord )

//GET SIGNLE RECORD FRO  DATABASE
router.get("/:id",getSingleRecord)


/* DEFAULT EXPORT */
module.exports = router