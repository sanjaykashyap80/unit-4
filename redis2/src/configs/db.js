const mongoose = require('mongoose');
module.exports = () => {
return mongoose.connect ("mongodb://loca Lhost:27817/test")
}