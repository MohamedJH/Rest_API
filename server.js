const express = require("express")
const app = express();
const mongoose = require("mongoose")
const port = 3000;
require('dotenv').config({path:"./Config/.env"})

// import Schema 
const user = require("./models/User")

// create server on port 3000
app.listen(port,()=>{
    console.log(`Hello from http://localhost:${port}`)
})

// middleware body-parser
app.use(express.json())
// connect db to our server
mongoose.connect(process.env.DB_HOST,{ useNewUrlParser: true , useUnifiedTopology: true },()=>{
    console.log("DB IS CONNECTED.....")
})

/***********************START CRUD********************************* */
// get all users
app.get("/api/users",(req,res)=>{
    user.find()
        .then((data) => res.send({"message":"get all users",data}))
        .catch((err) => res.status(404).send({"message":"ERROR",err}));
});
// add new user 
app.post('/api/add_user',(req,res)=>{
    const {Lastname,Firstname,Email,age} =req.body
    const newUser = new user({Lastname,Firstname,Email,age})
    newUser
           .save()
           .then(user=> res.send({"message":"Successfull Operation",user}))
           .catch(err => res.status(300).send({"message":"ERROR"}))
})

// Edit USER 
app.put('/api/users/:userID' , (req,res)=>{
    const id = req.params.userID;
    user.findByIdAndUpdate(id,{...req.body},{new:true})
        .then((user) =>res.send({"message":"user Update successfully",user}))
        .catch((err) => res.status(404).send({"message":"ERROR",err}))
})

// DELETE USER 
// Edit USER 
app.delete('/api/users/:userID' , (req,res)=>{
    const id = req.params.userID;
    user.findByIdAndDelete(id)
        .then((user) =>res.send({"message":"user DELETED successfully",user}))
        .catch((err) => res.status(400).send({"message":"ERROR",err}))
})


/***********************END CRUD************************************ */





