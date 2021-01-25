const mongoose = require("mongoose");
const UserData = require("../model/userModel"); //model
const faker = require("faker");
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

//delete all users from users collection



//perform different operation with mongoDB
const users = Array(10)
  .fill(null)
  .map(() => {
    const user = new UserData({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    //asynchronous code
    //store this user in database
    return user.save(); //Promise
  });

//resolve all Promises inside an array
//it is only to close mongoose connection
//Promise.all only accept Array of Promises
 Promise.all(users).then(() => {
  console.log("all users stored inside the database");
  mongoose.connection.close();
}); 

//after finish all tasks
//close mongoDB connection.
/* mongoose.connection.close(); */
