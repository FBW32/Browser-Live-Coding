const {body}=require("express-validator")

const rules=[
        body("password").isLength({min:5}).withMessage("it is too short"),

        body("email").isEmail().normalizeEmail().withMessage("email is invalid format")
        ,
        body("firstName").exists().trim().escape().withMessage("please provide firstname"),

        body("lastName").exists().trim().escape().withMessage("please provide lastname")
]

module.exports=rules