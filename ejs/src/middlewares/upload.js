const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniquePrefix + "-" + file.originalname)
    }
  })

  const fileFilter = (req, file, callback) =>{
      if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
      callback(null,true)
  }
  else {
    callback(null,false) 
  }
}

module.exports = multer({
    storage,
    fileFilter,
    limits:{
        fileSize:1024* 1024 * 5, // b * Kb * mb
    }
})