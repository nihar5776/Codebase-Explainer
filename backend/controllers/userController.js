const userModel = require('../model/userModel');
const jwt = require("jsonwebtoken")

const userRegisterController = async(req,res) =>{
    const {email,name,password} = req.body;
    const exists = await userModel.findOne({ email: email });
    if(exists){
        return res.status(422).json({
            status : "Faild",
            message : "User already Exists with this Email"
        })
    }

    const user = await userModel.create({
        email,name,password
    })

    return res.status(201).json({
        user:{
        _id : user._id,
        email : user.email,
        name : user.name
    },
    })
}

async function userLoginController(req,res){
    const {email,password} = req.body;
    console.log("LOGIN HIT");
     const user = await userModel.findOne({email:email}).select("+password")
       if(!user){
          return res.status(401).json({
            status :"Failed",
            message : "InValid Email Address"
        })  
       }

       const validPassword = await user.passwordCompare(password);
            if(!validPassword){
            return res.status(401).json({
                status : "Faild",
                message : "Invalid Password "
            })
            }
        
         const token = jwt.sign({userId:user._id},process.env.Jwt_Secret,{expiresIn : '2h'});
         res.cookie("token",token);
         
         res.status(200).json({
        user:{
           _id : user._id,
            email : user.email,
            name : user.name
        },
        token
    })

} 

async function userLogoutController(req,res){
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]
    
    if(!token)
         return res.status(400).json({
         message: "Please Login First"
    })

    res.clearCookie("token")
    res.status(200).json({
      message: "user Logged Out successfuly"  
    })
}
module.exports = {
                   userRegisterController,
                   userLoginController,
                   userLogoutController
                 }