const express = require('express');
const app = express();
const users = require("./users.json")

// app.use(logger);
app.use(express.json())
// app.use(users.json())

app.get("/get",(req,res)=>{
    res.send("Welcome to Home page")
    // console.log("Home pge get request")
})

app.get("/get/user",(req,res)=>{
    res.send(users)
})

app.post("/",(req,res)=>{
    // console.log("req.body",req.body)
    res.status(201).json(req.body);
    console.log("Home pge post request")
})

// function logger(res,req,next){
//     console.log("Logging before");
//     next();
//     console.log("Logging after")
// }

app.listen(1234, () =>{
    console.log('listening on 1234');
})
