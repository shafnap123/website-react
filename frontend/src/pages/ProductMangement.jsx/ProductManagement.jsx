
import { AdminPageDiv } from "../component/Adminpagediv/AdminPageDiv";
import { useState } from 'react'
import './ProductManagement.css'
import axios from "axios";
import { Button } from "../component/button/Button";
import { useNavigate } from 'react-router-dom';


export function ProductMangement() {
  const [image, setImage] = useState('')
  console.log(image, 'llllllllmnnn')
  const [imageName, setImageName] = useState('')
  console.log(imageName, 'llllllllmnnn')
  const [ItemName, setName] = useState('')
  const [mainflavor, setflavor] = useState('')
  const [price, setprice] = useState('')
  const [Menu, setMenu] = useState('')
  const [ItemCategory, setItemCategory] = useState('')
  const [imageurl, setimageurl] = useState('')
  console.log(ItemCategory, 'mmmmmmmmmmm')




  const imageuploader = (e) => {
    const file = e.target.files[0];
    setimageurl(file)
    setImageName(e.target.files[0])
    console.log(e.target.files, 'llllllllllllllll')
    if (file) {
      const imageurl = URL.createObjectURL(file);
      console.log(imageurl)
      setImage(imageurl);

    }


  }




  function getvalues() {
    const formData = new FormData();
    formData.append('ItemName', ItemName)
    formData.append('mainflavor', mainflavor)
    formData.append('price', price)
    formData.append('Menu', Menu)
    formData.append('ItemCategory', ItemCategory)
    formData.append('image', imageurl)
    console.log(formData,'LLLLLLLLLLLLLLLLLLLLLLL');
    
    axios.post('http://localhost:5000/addproduct', formData).then((res) => {
      alert("success")
      console.log(res.message)

    })



      .catch((err) => {
        console.log(err, "error")
        alert("error")
      })
  }



  return (

    <div className="formdiv" >
       <form action="" method='post'> 
        <div className="head1" >

          <div className='right'>
            <div className="hbtn">
              <h1 className="h1">product add</h1>
            </div>
            <br />

            {image == '' ? <label className="file-upload-wrapper" style={{ cursor: 'pointer' }}>
              <input
                name='image'
                type="file"
                id="dishImage"
                accept="image/*"
                onChange={imageuploader}
                style={{ display: 'none' }}
              />
              <span className="uploadlabel">Choose Dish Image</span>
            </label > : <img className="labelimage" src={image}></img>}<br />


            <input className="texts" type="text" placeholder='ItemName' onChange={(e) => { setName(e.target.value) }} /><br /><br />
            <input className="texts" type='text' placeholder='main flavor' onChange={(e) => { setflavor(e.target.value) }} /><br /><br />
            <input className="texts" type='text' placeholder='price' onChange={(e) => { setprice(e.target.value) }} /><br /><br />
            <select className="texts" name="" id="" onChange={(e) => { console.log(e.target.value), setMenu(e.target.value) }}>
              <option  >Choose Menu Here </option>
              <option value="Appetizer" >Appetizer </option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverage">Beverage</option>
            </select><br /><br />
            <select className="texts" name="" id="" onChange={(e) => setItemCategory(e.target.value)}>
              <option >Choose category here</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
            </select><br /><br />
            <Button type='button' text="submit" onClick={getvalues} style={{ backgroundColor: "yellowgreen", height: "70px", width: "190px" }} />


          </div>

        </div>
      </form>
    </div>

  );
}