import { response } from "express";
import { productmodel } from "../model/productmodel.js"
import { v2 as cloudinary } from 'cloudinary'
const addproduct = async (req, res) => {
   console.log(req.body, '/////////////\\\\\\\\\\\\\\\\\\')
   console.log(req.file)
   try {

      const { ItemName, price, Menu, ItemCategory, mainflavor } = req.body;
      console.log(req.body)
      const image = req.file
      console.log(image)
      res.send({ messege: "succes" })
      let uploadresult
      if (req.file) {
         uploadresult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
               { resource_type: 'image' },
               (error, result) => {
                  if (error) {
                     console.error('Error uploading to Cloudinary:', error);
                     return reject(error);
                  }
                  resolve(result);
               }
            );
            console.log('Buffer size:', req.file?.buffer?.length);

            stream.end(req.file.buffer);
         });
         console.log(uploadresult)
         await productmodel.insertOne({
            image: uploadresult.secure_url,
            ItemName: ItemName,
            price: price,
            Menu: Menu,
            mainflavor: mainflavor,
            ItemCategory: ItemCategory
         });

         console.log('Product added successfully with image')
         res.json({status:true,message:'Product Added successfully'})

      } else {




         await productmodel.insertOne({
            ItemName: ItemName,
            price: price,
            Menu: Menu,
            mainflavor: mainflavor,
            ItemCategory: ItemCategory
         });

         console.log('Product added successfully without image')
         res.json({status:true,message:'Product Added successfully'})
      }


   }
   catch (error) {
      console.log(error)
         res.json({status:false,message:'Failed to add Product'})
      
   }
}
const findproduct = async (req, res) => {
   try {
      const products = await productmodel.find({ isDelete: false })
      console.log(products, "successlll")
      res.json({ products: products })

   }
   catch (error) {
      console.log(error)
      res.send("failed")

   }
}

// const updateproduct = async (req, res) => {
//    try {


//    }
//    catch {

//    }
// }
const editproduct = async (req, res) => {
   const proID = req.query.productId
   console.log(proID, 'mkmmmmmmmmmmmmmmmmmmmmmmm')

   const product = await productmodel.findOne({ _id: proID })
   console.log(product, '////')
   res.json({ status: true, product: product })
}





const productedited = async (req, res) => {
   try {
      const productId = req.query.productId
      const productdata = req.body;
      const imagedata = req.file;
      console.log(req.body, '/////////////////', req.file, productId, ':::::::::::')
      let uploadresult
      if (req.file) {
         uploadresult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
               { resourse_type: "image" },
               (error, result) => {
                  if (error) {
                     console.error('error uploading to cloudinary', error);
                     return reject(error)
                  }
                  resolve(result);
               }
            )
            stream.end(req.file.buffer);
         })
      }

      console.log(uploadresult, 'LLLLLLLLLLLLLLLLLLLLLL')
      // Build update object dynamically
      const updateFields = {};

      if (productdata?.ItemName) updateFields.ItemName = productdata.ItemName;
      if (uploadresult?.secure_url) updateFields.image = uploadresult.secure_url
      if (productdata?.price) updateFields.price = productdata.price;
      if (productdata?.Menu) updateFields.Menu = productdata.Menu;
      if (productdata?.ItemCategory) updateFields.ItemCategory = productdata.ItemCategory;
      if (productdata?.mainflavor) updateFields.mainflavor = productdata.mainflavor;
      console.log(updateFields, '????????????????????????????????????????')
      const response = await productmodel.updateOne(

         { _id: productId },
         {
            $set: updateFields
         }
      );

      console.log(response);
      res.send('Data updated successfully');
   } catch (error) {
      console.log('Data update failed', error);
      res.send('Update failed');
   }
}

export const userproductfind = async (req, res) => {
   try {
      const products = await productmodel.find({ isDelete: false })
      console.log(products, "llllllllllllllllllllllllllllllllllllllll")
      res.json({ products: products })

   }
   catch (error) {
      console.log(error)
      res.send("failed")

   }
}




const deteleProduct = async (req, res) => {
   try {
      const productId = req.query.productId
      console.log(req.query.productId)
      const deleteproduct = await productmodel.updateOne({ _id: productId }, { $set: { isDelete: true } })
      console.log(deleteproduct)
      res.json({ deteleProduct: deleteproduct })

   }

   catch (error) {
      console.log(error)
      res.send("failed")

   }
}



export {
   addproduct, findproduct, editproduct, productedited, deteleProduct
}






