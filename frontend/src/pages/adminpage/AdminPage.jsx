import { useEffect, useState } from 'react'
import { AdminPageDiv } from '../component/Adminpagediv/AdminPageDiv'
import './Admin.css'
import axios from 'axios'
import { Button } from '../component/button/Button'
import { ProductMangement } from '../ProductMangement.jsx/ProductManagement'
import { CategoryManagement } from '../CategoryManagement/CategoryMangement'
import { Product } from '../product/Product'
import { CategoryList } from '../CategoryList/CategoryList'
export function AdminPage() {
  const [tab, settab] = useState("productList")

  useEffect(() => {
    const check = localStorage.getItem('adminORuser')
    if (check !== 'isAdmin') {
      window.location = '/'
    }
  }, [])
  return (

    <div className="admin-container">
      <div className="sidebar">
        <AdminPageDiv setTab={settab} />
      </div>
      <div className="content">
        {tab === 'productmanagement' && <ProductMangement />}
        {tab === 'productList' && <Product />}
        {tab === 'categorymanagement' && <CategoryManagement />}
        {tab === 'catogeryList' && <CategoryList />}
      </div>
    </div>
  );
}
