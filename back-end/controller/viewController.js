import { productmodel } from "../model/productmodel.js"

export const viewproduct = async (req, res) => {
   try{
   const productid  = req.query.productid
   console.log(productid, 'mkmmmmmmmmmmmmmmmmmmmmmmm')


   const product = await productmodel.findOne({ _id:productid })
   console.log(product, '////')
   res.json({ status: true, products: product })
   }catch(error){
      console.log(error)

   }
}
