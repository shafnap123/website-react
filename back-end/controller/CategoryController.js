import { json } from 'express'
import { categorymodel } from '../model/Categorymodel.js'
import { productmodel } from '../model/productmodel.js'
const addcategory = async (req, res) => {

    const ItemCategory = req.body.ItemCategory
    const Description = req.body.Description
    console.log(ItemCategory, Description)
    
    
    try {
        await categorymodel.insertOne({
            ItemCategory: ItemCategory,
            Description: Description
        })
       
        res.send("success")
    } catch (error) {

    }
    // await categorymodel.insertOne({
    //     ItemCategory:ItemCategory,
    //     Description:Description
    // }).then((resp)=>{
    //     console.log('add successfully')
    //     res.send('add succesfully')
    // }).catch((err)=>{
    //     console.log(err,'add failed')
    //     res.send(err+'add failed')
    // })






    // catch(error){
    //     console.log(error)

}
export const findcategory=async (req,res)=>{
    
    try{
        const category=await categorymodel.find({isdelete:false})
        console.log(category,"sucesss")
        res.json({category:category})

    }
    catch (error){
        console.log(error)
        res.send("failed")
    }

}
export const findeditedcategory=async(req,res)=>{
    const categoryid=req.query.categoryid
    console.log(categoryid)
    const category=await categorymodel.findOne({_id:categoryid})
    console.log(category)
    res.json({category:category})
    
}
export const editedcategory=async(req,res)=>{
    try{
        
    
        const categorydata=req.body;
        console.log(req.body,'/////////////////////////////')
        const updatedata={};
        if(categorydata.ItemCategory)updatedata.ItemCategory=categorydata.ItemCategory;
        if(categorydata.Description)updatedata.Description=categorydata.Description;
        console.log(updatedata)
        const response=await categorymodel.updateOne(
            {_id:categorydata.categoryid},
            {
            $set:updatedata,
            }
        ).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        console.log(response,'???????????')
        res.send('data updated succesfully')
    }
    catch(error){
     console.log('data addded failed',error)
     res.send('update failed')
    }
}
// export const deletecategory=async (req,res)=>{
//     const productid=req.query.productid
//     console.log(req.query.productid)
//     await categorymodel.updateOne({_id:productid},{$set:{isDelete:true}})
// }

 export const deletecategory=async(req,res)=>{
    try{
    const categoryid=req.query.categoryid
    console.log( categoryid)

    
    
   const deletecategory= await categorymodel.updateOne({_id:categoryid},{$set:{isdelete:true}})
    res.json({deletecategory:deletecategory})
}
   catch (error) {
      console.log(error)
      res.send("failed")

   }
}


export {
    addcategory,
}


