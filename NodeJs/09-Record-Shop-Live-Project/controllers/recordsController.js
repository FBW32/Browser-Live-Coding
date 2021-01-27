
const RecordData = require("../model/recordModel");

exports.getAllRecords = async (req, res, next) => {
  //getting/reading all records from db.json
  //db.get("records")=> target this property in db.json
  // .value() that means get value of that property
  try {
    let allRecords = await RecordData.find();
    res.status(200).send({ allRecords });
  } catch (err) {
    next(err);
  }
};

exports.postAddNewRecord = async (req, res, next) => {
  console.log(req.body);
  try {
    const record = new RecordData(req.body);
    await record.save(); //store data into database
    res.status(200).send({ record });
  } catch (err) {
    console.log(err.message);
    /*  res.status(404).send({err:err.message}) */
    next(err);
  }
};

exports.putUpdateRecord = async (req, res, next) => {
  const { id } = req.params;
  try {
      const updatedRecord = await RecordData.findByIdAndUpdate(id, req.body,{new:true})
      res.status(200).send({updatedRecord})
  } catch (err) {
    next(err);
  }
};

exports.deleteSingleRecord = async (req, res, next) => {
  const { id } = req.params;
try{
    const RecordDeleted= await RecordData.findByIdAndRemove(id)
    if(RecordDeleted){
         res.status(200).send({RecordDeleted})
    }else{
        res.status(404).send("Already Deleted that record")  
    }
    
}
catch(err){
    next(err)
}
};

exports.getSingleRecord = async (req, res, next) => {
  const { id } = req.params;
    try{
        const record = await RecordData.findById(id).select("-_id -__v")
        if(record){
            res.status(200).send({record})
        }
        else{
            res.status(404).send("No such record found with that Id")
        }
    }catch(err){next(err)}

};

//CRUD operation
//RESTful API  representational state transfer
/* module.exports={getAllRecords,postAddNewRecord} */
