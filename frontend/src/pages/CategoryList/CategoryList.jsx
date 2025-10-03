import { Button } from "../component/button/Button";
import "./CategoryList.css";
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function CategoryList() {
  const [render, setrender] = useState([])
  const [refresh,setrefresh]=useState(true)
  console.log(render,'mnmnmnmnmnmm')
  useEffect(() => {
    axios.get('http://localhost:5000/findcategory').then((res) => {
      setrender(res.data.category)
    })
  }, [refresh])
     const navigate = useNavigate();
  function gotoedit(categoryid){
    console.log(categoryid,"llll")
    navigate(`/categoryedited/${categoryid}`);
    setrefresh(!refresh)
  }
  function gotodelete(categoryid){
    axios.get(`http://localhost:5000/deletecategory?categoryid=${categoryid}`).then((res)=>{
      console.log('delete product')
       setrefresh(!refresh)
    })
  }
 
  

  console.log(render, 'lllllll')
  const categoryinfo = [
    { category: "maincourse" },
    { category: "dessert" }
  ];


  return (
    <div className="categorylist">
      <table>
        <thead>
          <tr>
            <th  className="boldcategorylist" style={{ width: "30%"}}>Category</th>
            <th className="boldcategorylist" style={{ width: "40%", textAlign:"center" }}>Description</th>
            <th className="boldacategorylist" style={{ width: "30%",textAlign:"center"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {render.map((item, index) => (
            <tr key={index} className="btnandvaluecategorylist">
              <td className="btandvaluetdcategorylist" >
                <span className="mapacategorylist">{item.ItemCategory}</span>
              </td>
                <td>
                <div style={{width:'100%' , height:'auto' , overflow:'hidden'}}>
                  <span className="mapacategorylist">{item. Description}</span><br/><br/>
                </div>

              </td>

              
              <td className="tdforbtncategorylist">
                <Button className="categorylistbutton" onClick={(e)=>gotoedit(item._id)}
                  text="Edit"
                  style={{ backgroundColor: "yellowgreen", height: "40px", width: "100px" }}
                />
                <Button  className="categorylistbutton"
                  text="Delete" onClick={()=>gotodelete(item._id)}
                  style={{ backgroundColor: "yellowgreen", height: "40px", width: "100px" }} 
                  
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
