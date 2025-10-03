import  './AdminDiv.css'
import { ProductMangement } from '../../ProductMangement.jsx/ProductManagement'
import { CategoryManagement } from '../../CategoryManagement/CategoryMangement'
export function AdminPageDiv({ setTab, }) {
    return (
        
        <div className='Adminpage'>
            <div className='ProductList ' >
                <a href="#" onClick={() => setTab('productList')}>ListProduct</a>
            </div>
            <div className='productMangement '>
                 <a href="#" onClick={() => setTab('productmanagement')}>ProductManagement</a>
            </div>
            <div className='categoryList ' >
                <a href="#" onClick={() => setTab('catogeryList')}>CategoryList</a>
            </div>
            <div className='Category ' >
                <a href="#" onClick={() => setTab('categorymanagement')}>CategoryManagement</a>
            </div>
        </div>
    )
}