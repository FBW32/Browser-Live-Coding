const db = require("../model/db")

exports.getAllRecords= (req,res,next)=>{
    //getting/reading all records from db.json
    //db.get("records")=> target this property in db.json
    // .value() that means get value of that property
    let allRecords = db.get("records").value()
    res.send({allRecords})
}

exports.postAddNewRecord= (req,res,next)=>{
    console.log(req.body)
    //add Record into db.json
    db.get("records").push(req.body).write()

    res.send("NEW record added into database")
}


/* module.exports={getAllRecords,postAddNewRecord} */