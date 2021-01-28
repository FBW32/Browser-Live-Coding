const { validationResult} = require("express-validator")

const Validation=(rules)=>{
    return [
        ...rules,
        //custom middleware
        (req,res,next)=>{
            console.log(req)
            const errors = validationResult(req)
            if(errors.isEmpty()){
                    next()
            }else{
                const extractedErrors=[]
                //we can use array() if we have same named array inside object
                errors.array().map(err=>{
                    extractedErrors.push({[err.param]:err.msg })
                })
               /*  const err = {
                    status:400,
                    message:extractedErrors
                }
                next(err) */
                res.status(400).json({success:false, errors:extractedErrors})

            }
        }
    ]
}

module.exports = Validation;

