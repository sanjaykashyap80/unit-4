const express = require('express')
const mongoose = require('mongoose')

const connect = ()=>{
    return mongoose.connect("mongodb+srv://Sanjay_Kashyap:sanjay123@cluster0.xzye9.mongodb.net/test");
};

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true },
    last_name:{type: String, required: false },
    email:{type: String, required: true, unique:true },
    gender:{type: String, required: false,default:"Male" },
    ip_address:{type: String, required: false },
    // age:Number,
},
{
    versionKey: false,
    timestamps: true
})

const User = mongoose.model("user",userSchema);    // users

const app = express();

app.use(express.json());

app.post("/users", async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).send(user);
    } 
    catch(e){
        res.status(500).json({message: e.message, status:"failed"});
    }
})

app.get("/users", async (req,res)=>{
    //thenabble
    try{
    const users = await User.find().lean().exec();
    // console.log(users);
    return res.send({users});
    // res.status(200).json({data:user});
    }
    catch(e){
       return res.status(500).json({message: e.message, status:"failed"});
    }
})

app.get("/users/:id", async (req,res)=>{
    try{
    const user = await User.findById(req.params.id).lean().exec();
    res.send({user});
    }
    catch(e){
        res.status(500).json({message: e.message, status:"failed"});
    }
})

app.patch("/users/:id",async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        }).lean().exec();
        return res.status(201).send(user);
    }
    catch(e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
})

app.delete("/users/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);
    }
    catch (e){
        return res.status(500).json({message: e.message, status:"Failed"});
    }
})


app.listen(2345, async function(){
    await connect();
    console.log("listening on 2345")
})


// const start = async()=>{
//     await connect();
//     app.listen(2223,()=>{
//         console.log("Listening on port 2223");
//     })
// }

// start();