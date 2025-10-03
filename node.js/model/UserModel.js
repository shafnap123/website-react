import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const usermodel=mongoose.model("usercolection",userSchema)
export default usermodel
