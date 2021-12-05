const express = require('express');

// const transporter = require("../configs/mail")

const Product = require("../models/product.model")

const sendMail = require("../utils/send-mail")

const router = express.Router();

router.post("/", async(req, res)=>{
    try{
        const product = await Product.create(req.body)

        sendMail(
            "a@a.com",["b@b.com","c@c.com","d@d.com","e@e.com","f@f.com"],
            `Created a producted with name ${req.body.name}`,
            "Create a new product","<h1>Create a new product</h1>"
            )

        // const message = {
        //     from: "a@a.com",
        //     to: "b@b.com",
        //     subject: `Created a producted with name ${req.body.name}`,
        //     text: "Some description about the product",
        //     html: "<h1>Some description about the product</h1>"
        //   };

        //   transporter.sendMail(message)

        return res.status(201).json({product});
        }
        catch (e){
      return res.status(500).json({status:"failed",message:e.message});
        } 
})

router.get("/", async (req,res)=>{
    try{
        const page = +req.query.page || 1;
        const size = +req.query.size || 2;

        // page = 1 skip(0) limit(2)
        const skip  = (page - 1) * size;

    const product = await Product.find().skip(skip).limit(size).lean().exec()
    const totalPages = Math.ceil(await Product.find().countDocuments() / size);

    return res.json({product,totalPages});
    }
    catch (e){
  return res.status(500).json({status:"failed",message:e.message});
    }
})

module.exports = router