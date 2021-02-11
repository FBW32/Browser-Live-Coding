const express = require("express")

const router = express.Router()

const {getAllRecords,postAddNewRecord,putUpdateRecord,deleteSingleRecord,getSingleRecord} = require("../controllers/recordsController")
const recordsRules= require("../lib/validationRules4records")
const Validation = require("../middlewares/validation")
const { auth } = require("../middlewares/anthentication")
const { isAdmin } = require("../middlewares/checkRole")

/* GET ALL RECORDS FROM RESOURCES */
router.get("/", auth ,getAllRecords )

/* POST REQUEST TO ADD NEW RECORD */
router.post("/", auth, isAdmin, Validation(recordsRules), postAddNewRecord)

/* PUT REQUEST TO UPDATE SIGNLE RECORD IN DATABASE */
router.put("/:id",auth, isAdmin, putUpdateRecord )

/* DELETE REQUEST TO DELETE SIGNLE RECORD IN DATABASE */
router.delete("/:id",auth, isAdmin,  deleteSingleRecord )

//GET SIGNLE RECORD FRO  DATABASE
router.get("/:id",auth, getSingleRecord)


/* DEFAULT EXPORT */
module.exports = router