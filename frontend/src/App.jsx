import axios from 'axios';
import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './pages/Home/Home.jsx';


// import { SignUp } from './pages/signup/Signup.jsx';
import { First } from './pages/first/First.jsx';
import { SignUp } from './pages/signup/SignUp.jsx';
import { AdminPage } from './pages/adminpage/AdminPage.jsx';

import { CategoryManagement } from './pages/CategoryManagement/CategoryMangement.jsx';
import { ProductMangement } from './pages/ProductMangement.jsx/ProductManagement.jsx';
import { Product } from './pages/product/Product.jsx';
import { CategoryList } from './pages/CategoryList/CategoryList.jsx';
import { HotelProduct } from './pages/hotelProduct/HotelProduct.jsx';
import { Edit } from './pages/edit/Edit.jsx';
import { CategoryEdited } from './pages/categoryedited/CategoryEdited.jsx';
import { Login } from './pages/login/Login.jsx';



// import {first} from './pages/first/First.jsx'





function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    
     <Route path="/product" element={<Product/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/register" element={<SignUp/>}/> 
    <Route path="/home" element={<First/>}/>
    <Route path='/AdminPage' element={<AdminPage/>}/>
    <Route path='/productmanagement' element={<ProductMangement/>}/>
    <Route path='/categorymanagement' element={<CategoryManagement/>}/>
    <Route path='/categorylist' element={<CategoryList/>}/>
    <Route path='/hotelproduct' element={<HotelProduct/>}/>
    <Route path='/edit/:proID' element={<Edit/>}/>
    <Route path='/categoryedited/:categoryid' element={<CategoryEdited/>}/>
  
    

  
   

    </Routes>
    </BrowserRouter>
  )
}

export default App
