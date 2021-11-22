const express = require('express');
const users = require('./users.json')
const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    // console.log("get");
    res.send(users);
})


app.post("/books",(req,res)=>{
    //    console.log(req.body);
       const newUsers = [...users,req.body];
       res.send(newUsers);
    })

app.get("/books/:id",(req,res)=>{
    // console.log("id");
        const newUsers = users.filter((user)=> user.id == req.params.id);
        console.log(newUsers);
        res.send(newUsers);
    }) 

    
app.patch("/books/:id",(req,res)=>{
        const newUsers = users.map((user)=>{
            if(req.params.id == user.id){
                if(req?.body?.first_name) user.first_name = req.body.first_name
                if(req?.body?.last_name) user.last_name = req.body.last_name
                // if(req?.body?.email) user.email = req.body.email
                // if(req?.body?.gender) user.gender = req.body.gender
            }
            return user;
        });
        res.send(newUsers)
      })  
      
app.delete("/books/:id",(req,res)=>{
        const newUsers = users.filter((user)=> user.id != req.params.id);
        res.send(newUsers);
    })      


app.listen(2200,() =>{
    console.log("Litening on 2200")
})