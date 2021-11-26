const express = require('express');
const app = express();

const users = require("./users.json")
// console.log(users);

app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Welcome to Home page")
})
app.get("/users",(req,res)=>{
    res.send({users})
})

app.post("/",(req,res)=>{
//    console.log(req.body);
   const newUsers = [...users,req.body];
   res.send(newUsers);
})

// app.patch("/:email",(req,res)=>{
// //    console.log(req.params.id);
//    console.log(req.params.email);
//    res.send("Patch");
// })

// app.patch("/:email",(req,res)=>{
//   const newUsers = users.map((user)=>{
//       if(req.params.email === user.email){
//           return req.body;
//       }
//       return user;
//   });
//   res.send(newUsers)
// })

app.patch("/:email",(req,res)=>{

    let a = {}

    a.name = "Dhaval Chedda";

  const newUsers = users.map((user)=>{
    if(req.params.email === user.email){
          if(req?.body?.first_name) user.first_name = req.body.first_name
          if(req?.body?.last_name) user.last_name = req.body.last_name
          if(req?.body?.email) user.email = req.body.email
          if(req?.body?.gender) user.gender = req.body.gender
      }
      a.name = "Nrupul";
      
      return user;
  });
  res.json({newUsers,a})
})

app.delete("/:email",(req,res)=>{
    const newUsers = users.filter((user)=> user.email !== req.params.email);
    res.send(newUsers);
})

app.get("/:id",(req,res)=>{
    
    const newUsers = users.filter((user)=> user.id == req.params.id);
    res.send(newUsers);
})

// const newUsers = users.filter((user)=> user.id === 1);
//     console.log(newUsers);

app.listen(2202,() =>{
    console.log("Litening on 2200")
})