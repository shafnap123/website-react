import './product.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import image from'../../../public/food.png'
import { useNavigate } from 'react-router-dom';


export function Product() {
  const [render, setrender] = useState([])
  const[refresh,setrefresh]=useState(true)
  useEffect(() => {
    axios.get('http://localhost:5000/findproduct').then((res) => {
      setrender(res.data.products)
    }).catch((err)=>{
      console.log(err);
    })
  }, [refresh])
    const navigate = useNavigate();

  console.log(render, 'lllllll')

  function gotoEdit(productID){
    console.log(productID,'???????????????')
    navigate(`/edit/${productID}`);
    setrefresh(!refresh)

  }
  function goToDelete(productId) {
    axios.get(`http://localhost:5000/deteleProduct?productId=${productId}`).then((res) => {
      console.log('delete product')
      alert("delete product")
       setrefresh(!refresh)
       
   
    })
  }
  // console.log(render)
  // const productinfo = [
  //   {
  //     image: '/shahi-paneer.jpg',
  //     ItemName: 'Shahi Paneer',
  //     mainflavor: 'Creamy-sweet',
  //     price: '₹250',
  //     Category: 'Main Course',
  //     Cuisine: 'Indian',
  //   },
  //   {
  //     image: '/gulabjamun.jpg',
  //     ItemName: 'Gulab Jamun',
  //     mainflavor: 'Sweet-floral',
  //     price: '₹250 per kg',
  //     Category: 'Dessert',
  //     Cuisine: 'Indian',
  //   },
  // ];

  return (
    <div className="profilist">
      <div className="proseclist">
        <div className="productuploadlist">
          <table style={{ width: "100%", }}>
            <thead style={{ width: '100%' }}>
              <tr>
                <th className="thcategory"style={{ width: '20%' }}>Food Name</th>
                <th className="thcategory">Main Flavor</th>
                <th className="thcategory" >Price</th>
                <th className="thcategory" >Category</th>
                <th className="thcategory" >Cuisine</th>
                <th  className="thcategory"style={{ width: '15%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {render.map((item, index) => (
                <tr key={index}>

                  <td class="item-flexlist">
                    {/* <div className="item" style={{ display: 'flex' }}> */}
                    <img
                      className="productimagelist"
                      src={item.image}
                      alt={item.ItemName}
                    />
                    <p className='foodsptaglist'>{item.ItemName}</p>
                    {/* </div> */}
                  </td>

                  <td >{item.mainflavor}</td>

                  <td >{item.price}</td>
                  <td >{item.ItemCategory}</td>
                  <td >{item.Menu}</td>
                  <td>
                  
                    <button className='btnclasslist' style={{ width: '100%' }} onClick={()=>gotoEdit(item._id)}>Edit</button>
                    <button className='btnclasslist' style={{ width: '100%' }} onClick={(e)=>{goToDelete(item._id)}}>Delete</button>
                
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div >
  );
}
