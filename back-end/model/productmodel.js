import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    ItemName:{
        type:String,
        required:true
    },
    
   price:{
    type:String,
    required:true
   },
   Menu:{
    type:String,
    required:true
   },
   ItemCategory:{
    type:String,
    required:true
   },
   mainflavor:{
    type:String,
    required:true
   

   },
   isDelete:{type:String,default:false}
   

})
const productmodel=mongoose.model("productuser",productSchema)
export{
    productmodel
}