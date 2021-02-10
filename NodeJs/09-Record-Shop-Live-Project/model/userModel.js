const mongoose = require("mongoose")
const AddressSchema = require("./adressSchema")
 const Schema = mongoose.Schema;
const {encrypt}= require("../lib/encryption");
const { compare } = require("../lib/encryption");

const JWT = require("jsonwebtoken")


//definining our schema
/* User is a instance from Schema Class */
const UserSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    address: AddressSchema
})

UserSchema.pre("save",function(next){
    //dont update or hashed password if it is not modified
    if( ! this.isModified("password")) return next()

    this.password = encrypt(this.password)
    next()
})

UserSchema.methods.checkPassword=function(password){
    console.log("method created in user model")
    return compare(password,this.password)
   
}

UserSchema.statics.generateAuthToken=function(){
const token = JWT.sign({_id:this._id,email:this.email },"secretkey" )
console.log(token)
}


/* creating/exporting our users Model */
/* mongoose.model(<Collection>,<Document>) */
module.exports =  mongoose.model("users",UserSchema) //model