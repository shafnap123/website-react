import { use, useState } from 'react'
import { AdminPage } from '../adminpage/AdminPage'
import { AdminPageDiv } from '../component/Adminpagediv/AdminPageDiv'
import { Button } from '../component/button/Button'
import './CategoryManagement.css'
import axios from 'axios'

export function CategoryManagement() {

  const [ItemCategory, setItemCategory] = useState('')
  const [Description, setDescription] = useState('')


  function getvalues1() {
    axios.post('http://localhost:5000/admin/addcategory', { ItemCategory, Description }).then((res) => {
      console.log(res.data)
     alert('success')
    }).catch((err) => {
      console.log(err, "error")
 
    })
  }

  return (
    <div className='categoryfcategorymanagement'>
      <div className='proscategorymanagement'>


        <h1>add category</h1>
        <br />
        <div className='entertext'>
          <input className='putcategorymanagement' type="text" placeholder='Enter A category' name={'ItemCategory'} onChange={(e) => { setItemCategory(e.target.value) }}></input><br />
          <input className="putcategorymanagement" type="text" placeholder='Enter Description' name={'Description'} onChange={(e) => { setDescription(e.target.value) }}></input>
          <br />

          <Button className="categorymangementbutton" type="button" onClick={getvalues1} style={{ backgroundColor: "yellowgreen", width: "100px", height: "50px" }} text="ADD Category" />
        </div>






      </div>
    </div>
  )
}