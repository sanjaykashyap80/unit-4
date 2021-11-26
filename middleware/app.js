const express = require('express');
const users = require("./users.json");
const app = express();


const authenticate = (req,res,next)=>{
    console.log("authenticate");
    next();
}

// const authorise = (permission)=>{
//     return (req,res,next) =>{
//         console.log(permission);
//         next();
//     }
// }

const authorise = (permission) => {
    return (req,res,next) =>{

       const originalSendFunc = res.send.bind(res);
       res.send = function (body){
           body.name = "Nrupul Dev";
           console.log(body);  // Do whatever here
           return originalSendFunc(body);
       } ;
        // console.log(permission);
        next();
    }
}

// Does not require auth
app.get("/posts",(req,res)=>{
    res.send("From inside GET all users");
})

// require auth, authorise but only users with editor permission can do it
// app.post("/posts",authenticate,authorise(["editor","yes"]), (req,res)=>{
//     res.send("From inside post");
// })

app.post("/posts",authenticate,authorise("editor"), (req,res)=>{
    res.send({name:"Dhaval Chheda"});
})

app.post("/finance",authenticate,authorise("finance"), (req,res)=>{
    res.send("From inside post");
})

app.get("/posts/:id",(req,res)=>{
    res.send("From inside GET single user");
})

app.listen(2222,()=>{
    console.log("Listening on 2222")
})