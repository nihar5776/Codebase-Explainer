const express = require('express');
const userRouter = require("../backend/routes/user.routes")
const cookieParser = require("cookie-parser")
const aiRouter = require('./routes/input.routes')


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",userRouter);
app.use('/api/ai',aiRouter);


module.exports = {app};