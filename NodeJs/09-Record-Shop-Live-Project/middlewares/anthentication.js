const JWT = require("jsonwebtoken")
const UserModel = require("../model/userModel")


exports.auth =async (req,res,next)=>{

    try{
        const token = req.header("x-auth")
    const check = JWT.verify(token,"secretcode")
    //finding user into database
   /*  const user = await UserModel.findOne({email:check.email}) */
    const user = await UserModel.findById(check._id)
    if(user){
        req.user=user;
        next() 
    }else{
        let error = new Error("unauthorised user")
        next(error)
    }}
    catch(err){
        next(err)
    }
    

}