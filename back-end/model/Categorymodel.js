import mongoose from "mongoose";

const categorySchema=new mongoose.Schema({
    ItemCategory:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    isdelete:{
        type: String,
        default:false
    }




})
const categorymodel=mongoose.model("category",categorySchema)
export {
    categorymodel
}