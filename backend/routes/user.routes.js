const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController")

Router.post("/register",userController.userRegisterController);
Router.post("/login",userController.userLoginController);
Router.post("/logout",userController.userLogoutController);

module.exports = Router

