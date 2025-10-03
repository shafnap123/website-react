import mongoose from "mongoose";

const registerSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    Emailaddress:{
        type:String,
        required:true,
        unique: true 
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        require:true,
        default:false
    }

})
const registermodel=mongoose.model("signup",registerSchema)
export  {registermodel}