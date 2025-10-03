import { use } from 'react'
import { Button } from '../component/button/Button'
import './CategoryEdited.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
export function  CategoryEdited(){
     
    let {categoryid}=useParams() 
    

    const [ItemCategory,setItemCategory]=useState('')
    const [Description,setDescription]=useState('')
    console.log(categoryid,'dddd')
    const [Categorydetails,setcategorydetails]=useState({})

       useEffect(() => {
        axios.get(`http://localhost:5000/findEditedCategory?categoryid=${categoryid}`)
            .then((res) => {
                console.log('success', res.data.category, '/aaaa');
                setcategorydetails(res.data.category)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [categoryid]);
       const editcategory = () => {
        axios.post(`http://localhost:5000/editedcategory`, {categoryid:categoryid,ItemCategory,Description}).then(() => {
            alert('edit this product')
        })
    }
    
    return(
        <div className="mainedited">
            
             <div className='secondmainedided'>
                <div className="maineditedh1">
               <h1 className="h1category">Category</h1><br/>
               </div>
             
                
              
            
           
       <input type="text" placeholder="ItemCategory" style={{width:"500px",height:"50px"}} defaultValue={Categorydetails.ItemCategory}onChange={(e) => { setItemCategory(e.target.value) }}></input><br/><br/>
       <input type="text" placeholder="description" style={{width:"500px",height:"50px"}} defaultValue={Categorydetails.Description}  onChange={(e) => { setDescription(e.target.value) }}></input><br/>
        <Button className="categoryeditbutton" style={{ backgroundColor: "yellowgreen", width: "100px", height: "50px" }}text="submitt" onClick={editcategory}  />
        </div>
        </div>
        
    )
}