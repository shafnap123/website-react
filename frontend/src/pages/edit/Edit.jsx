import { useParams } from "react-router"
import gulab from '../../../public/gulabjamun.jpg'
import './edit.css'
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Product } from "../product/Product"
import { Button } from "../component/button/Button"

export function Edit() {
  const [ItemName, setItemName] = useState('')

  const [price, setPrice] = useState('')
  const [Menu, setMenu] = useState('')
  const [ItemCategory, setItemCategory] = useState('')
  const [mainflavor, setmainflavor] = useState('')
  const [image, setimage] = useState(null)
  const [previewImage, setPreviewImage] = useState('');
  console.log(ItemName, price, Menu, ItemCategory, mainflavor)

  let { proID } = useParams()
  console.log(proID, '11111111111////////////')
  const [productDetails, setProductDetails] = useState({})
  console.log(productDetails)
  // useEffect(() => {
  //     axios.get(`http://localhost:5000/editproduct?productId=${proID}`).then((res) => {
  //         console.log('success', res.data.product, '/aaaaaaaaaaaaaaaaaaa')
  //         setProductDetails(res.data.product)


  //     }).catch((err) => {
  //         console.log(err)
  //     })

  // }, [])
  useEffect(() => {
    axios.get(`http://localhost:5000/editproduct?productId=${proID}`).then((res) => {
      const product = res.data.product;
      setProductDetails(product);
      setPreviewImage(product.image); // 👈 preview the current image
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  const editProduct = () => {

    const formData = new FormData();
    formData.append("ItemName", ItemName || productDetails.ItemName);
    formData.append("price", price || productDetails.price);
    formData.append("Menu", Menu || productDetails.Menu);
    formData.append("ItemCategory", ItemCategory || productDetails.ItemCategory);
    formData.append("mainflavor", mainflavor || productDetails.mainflavor);
    formData.append("image", image || previewImage);
    console.log(formData,'??????????????????',productDetails)



    axios.post(`http://localhost:5000/productedited?productId=${proID}`, formData).then(() => {
      alert('edit this product')
    })
  }

  return (
    <div className="gulabmain1">
      <div className='gulbh1main'>
        <h1>Category</h1><br />
        <div className="gulbmain">

          <div className="gulbsecond">
            <img className='gulabimg' src={previewImage} onChange={(e) => { setimage(e == {} ? productDetails.image : e.target.value) }}></img>

            {/* <img className='gulabimg' src={previewImage} alt="Product" /> */}
            <br /><br />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setimage(file);
                  setPreviewImage(URL.createObjectURL(file));
                }
              }}
            />

          </div>

          <div className='c'><br /><br />
            <input className='gulabinput' type="text" placeholder='ItemName' defaultValue={productDetails.ItemName} onChange={(e) => { setItemName(e == {} ? productDetails.ItemName : e.target.value) }}></input><br /><br />
            <input className="gulabinput" type="text" placeholder='Main Flavor' defaultValue={productDetails.mainflavor} onChange={(e) => { setmainflavor(e.target.value) }}></input><br /><br />
            <input className='gulabinput' type="text" placeholder='price' defaultValue={productDetails.price} onChange={(e) => { setPrice(e.target.value) }}></input><br />
            <br />
            <select className='gulabinput' name="" defaultValue={productDetails.Menu} onChange={(e) => { setMenu(e.target.value) }}>
              <option value={productDetails.Menu}>{productDetails.Menu} </option>
              <option value="Appetizer" >Appetizer </option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverage">Beverage</option>
            </select><br /><br />
            <select className='gulabinput' defaultValue={productDetails.ItemCategory} onChange={(e) => { setItemCategory(e.target.value) }}>
              <option value={productDetails.ItemCategory}>{productDetails.ItemCategory}</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
            </select><br /><br />
            <Button onClick={editProduct} style={{ backgroundColor: "yellowgreen", height: "70px", width: "180px" }} text="submitt" />




          </div>





        </div>
      </div>

    </div>
  )
}