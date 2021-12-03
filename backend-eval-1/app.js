const express = require('express');

const app = express();
const jobs = require("./jobs.json");
const wfmjobs = require("./wfmjobs.json");
const noticePeriod2Month = require("./noticeP2Mjobs.json");
const company_details = require('./company.json')


app.use(express.json());

app.get("/noticeP2Month",(req,res)=>{
    res.send({noticePeriod2Month});
})

app.get("/wfhjobs",(req,res)=>{
    res.send({wfmjobs});
})

app.get("/jobs/:city",(req,res)=>{
    const cityjobs = jobs.filter((job)=> job.city === req.params.city);
    res.send(cityjobs);

})

app.get("/:company_name", (req,res)=>{
    const detail = company_details.filter((det)=> det.company_name === req.params.company_name);
    res.send(detail);
})




app.listen(2222, ()=>{
    console.log("Listening on 22222");
})
