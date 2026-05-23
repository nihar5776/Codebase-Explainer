const mongoose = require('mongoose')

function mongoDBConnect(){
    mongoose.connect(process.env.mongo_URI)
     .then(() => { 
        console.log("MongoDB Connected Successfully");
     })
      .catch((err)=>{
        console.log("Failed To Connect With DB",err.body);
        process.exit(1);
      })
}

module.exports = mongoDBConnect;