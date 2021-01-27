const db = require("../model/db")
const OrderData= require("../model/orderModel")

exports.getAllOrders= (req,res,next)=>{
   //getting/reading all orders from mongoDB
  try {
    let allOrders = await OrderData.find();
    res.status(200).send({ allOrders });
  } catch (err) {
    next(err);
  }
}

exports.postAddNewOrder= (req,res,next)=>{
    console.log(req.body)
    //adding new Order into mongoDB
  try {
    const order = new OrderData(req.body);
    await order.save(); //store data into database
    res.status(200).send({ order });
  } catch (err) {
    console.log(err.message);
    /*  res.status(404).send({err:err.message}) */
    next(err);
  }
}

exports.putUpdateOrder=(req,res,next)=>{
    const { id } = req.params;
 //finding existing order with that id in database and update
 try {
    const updatedOrder = await OrderData.findByIdAndUpdate(id, req.body,{new:true})
    res.status(200).send({updatedOrder})
} catch (err) {
  next(err);
}

}

exports.deleteSingleOrder=(req,res,next)=>{
    const {id} = req.params
    //finding existing record with that id in database and delete
try{
    const orderDeleted= await OrderData.findByIdAndRemove(id)
    if(orderDeleted){
         res.status(200).send({orderDeleted})
    }else{
        res.status(404).send("Already Deleted that record")  
    }
}
catch(err){
    next(err)
}
  
}

exports.getSingleOrder=(req,res,next)=>{
    const {id} = req.params
    //get/read single order from mongodb
    try{
        const order = await OrderData.findById(id).select("-_id -__v")
        if(order){
            res.status(200).send({order})
        }
        else{
            res.status(404).send("No such record found with that Id")
        }
    }catch(err){next(err)}
}

//CRUD operation
//RESTful API  representational state transfer
/* module.exports={getAllOrders,postAddNewOrder} */