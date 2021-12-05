const transporter = require("../configs/mail")

module.exports = (from,to,subject,text,html)=>{
const message = {
    from,
    to,
    subject,
    text,
    html
  };

  transporter.sendMail(message)
}


// module.exports = (from,to,subject,text,html)=>{
// const message = {
//     from: "a@a.com",
//     to: "b@b.com",
//     subject: `Created a producted with name ${req.body.name}`,
//     text: "Some description about the product",
//     html: "<h1>Some description about the product</h1>"
//   };

//   transporter.sendMail(message)
// }