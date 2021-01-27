const mongoose = require("mongoose");
const UserData = require("../model/userModel"); //users model
const RecordData = require("../model/recordModel"); //records model
const faker = require("faker");

async function seed() {
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
  /* Promise.then().then().catch() */
  /*  try{}catch(err){} */
   try {
    await UserData.deleteMany({});
    console.log("all previous users deleted from database");
  } catch (err) {
    console.log(err);
  }

  try {
    await RecordData.deleteMany({});
    console.log("all previous records deleted from database");
  } catch (err) {
    console.log(err.message);
  }
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
  //Promise.all only accepts Array of Promises

  try {
    await Promise.all(users);
    console.log("all users stored inside the database");
  } catch (err) {
    console.log(err.message);
  } 
  //add records in records collection
  const records = Array(10)
    .fill(null)
    .map(() => {
      const record = new RecordData({
        title: faker.commerce.productName(),
        artist: faker.name.firstName(),
        year: faker.date.past().getUTCFullYear(),
        img: faker.image.imageUrl(),
        price: faker.commerce.price(),
      });
      return record.save();
    });
  try {
    await Promise.all(records);
    console.log("records added into database")
  } catch (err) {
    console.log(err.message);
  }

 

  //after finish all tasks
  //close mongoDB connection.
  mongoose.connection.close();
}

seed();
