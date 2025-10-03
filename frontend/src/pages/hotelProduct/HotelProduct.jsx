import axios from 'axios'
import { Button } from '../component/button/Button'
import './HotelProduct.css'
// import { data } from 'react-router-dom'
import { use, useEffect, useState } from 'react'
export function HotelProduct() {


  const [productId, setProductId] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [login,setlogin]=useState(null)
  console.log(login,"login")
  const [value, setvalue] = useState([]);
  console.log(value, '...........................')

  useEffect(() => {
    axios.post('http://localhost:5000/userproductfind').then((res) => {
      console.log("sucess")
      setvalue(res.data.products)
      setlogin(localStorage.getItem('userId'))

    })
  }, [])



  const closeProductView = () => {
    setSelectedProduct(null);
  }
  function viewProduct(productid) {
    setProductId(productid)
    console.log(productid, 'lllllllllllllllllllllllllllllllll')
  }

  //   axios.get(`http://localhost:5000/viewproduct?productid=${productId}`).then((res)=>{
  //      if (res.data.status) {
  //         setSelectedProduct(res.data.products);
  //             .catch((err) => {
  //       console.error("Failed to fetch product:", err);
  //     });
  // }
  function viewProduct(productid) {
    axios
      .get(`http://localhost:5000/viewproduct?productid=${productid}`)
      .then((res) => {
        if (res.data.status) {
          setSelectedProduct(res.data.products);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
      });
  }



  const addproduct = [
    {
      img: '../../../public/shahi-paneer.jpg',
      itemname: "shahi-paneer",
      about: "Shahi Paneer is one of the crown jewels of Mughlai cuisine — a royal North Indian dish that embodies richness,elegance, and indulgence in every bite. It's a classic curry that blends the softness of paneer (Indian cottage cheese) with a silky-smooth, mildly spiced gravy that's both aromatic and slightly sweet.",
      price: "₹1000"

    },
    {
      img: "../../../public/"
    }
  ]
  return (
    <div className="gomatomain">
      <div className="gomatosec">

        <div className='signuplink'>
          <h1 className='gomatoh1'>GOMATO</h1>
          <div className='linkhpc'>
            <a href="/">Home</a>
            <a href="/hotelproduct">Food Name</a>
            <a href="#contact">Contact</a>
          </div>
          <div className='buttonlinkforstyle'>
            <Button style={{ backgroundColor: "black", color: "white", height: "50px", width: "100px" }} text={login==null?
              'signup':'logout'
            } onClick={() => { window.location = "/register" }}  />
          </div>
        </div>
        <div className='displayflexleftsidecategories'>



          {selectedProduct && (
            <div className="product-view-modal">
              <div className="product-view-content">
                <span className="close-btn" onClick={closeProductView}>X</span>
                <img src={selectedProduct.image} alt={selectedProduct.ItemName} className="big-product-image" />
                <h2>{selectedProduct.ItemName}</h2>
                <h3>{selectedProduct.price}</h3>
              </div>
            </div>


          )}

          <div className='imagerightsidecategories'>
            {value.map((item, index) => (
              <div className='imagerightsidediv' key={index}>
                <img className='imgrightsidecategories'
                  src={item.image} />
                <h1 className='imagerightsideh1'>{item.ItemName}</h1>

                <p className='pricep'>{item.price}</p>
                <div className='viewmenudiv'>

                  <Button onClick={() => { viewProduct(item._id) }} text="View Menu" style={{ backgroundColor: "yellowgreen", width: "100px", height: "50px" }} />

                </div>
              </div>











            ))}

          </div>
        </div>

      </div>

      {/* Product Detail View (Big Div) */}


      {/* Footer */}

      <footer class="footer" id="contact">
        <div class="footer-container">
          <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            <p>Phone: <a href="tel:+919846935275">9846935275</a></p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          <div class="footer-copy">
            <p>&copy; 2025 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}