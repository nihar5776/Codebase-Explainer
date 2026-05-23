require("dotenv").config()

const {app} = require('./app');
const mongoDBConnect = require("./config/db");

mongoDBConnect();

app.listen(process.env.PORT,()=>{
    console.log("Server Has Started",process.env.PORT);
});