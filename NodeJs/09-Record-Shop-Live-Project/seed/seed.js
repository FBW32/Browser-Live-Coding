const mongoose = require("mongoose");
const UserData = require("../model/userModel"); //model
//connect our application with mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/new-record-shop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//open/connect
//listening for event
mongoose.connection.on("open", () => {
  console.log("connection established");
});
//error/connection error
//listening for event
mongoose.connection.on("error", () => {
  console.log("Error found while connecting");
});

//perform different operation with mongoDB

const user = new UserData({
  firstName: "Lawrance",
  lastName: "lastName",
  email: "abc@gmail.com",
  password:"123"
});
//asynchronous code
//store this user in database
user.save().then(() => {
  console.log("user stored in database");
  //after finish all tasks
  //close mongoDB connection.
  mongoose.connection.close();
});
