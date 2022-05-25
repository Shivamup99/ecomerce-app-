import React, { useState } from 'react'
import './style/proList.css'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    const [filters,setFilters] = useState({})
    const [sort,setSort] = useState('newest')
    const handleFilter =(e)=>{
       setFilters({...filters,[e.target.name]:e.target.value}) 
    }
    console.log(filters)
  return (
      <>
    <Navbar/>
    <div className='pro-list'> 
    <span style={{margin:'40px 25px',border:'1px solid gray',padding:'5px 15px',fontSize:'22px',textTransform:'uppercase'}}>{cat}</span>   
     <div className="filter-list">
         <div className="filter-1">
             Filter Products :
             <select name='color' onChange={handleFilter}>
                 <option disabled selected>
                     Color
                 </option>
                 <option>white</option>
                 <option>black</option>
                 <option>red</option>
                 <option>yellow</option>
                 <option>blue</option>
             </select>
             <select name='size' onChange={handleFilter}>
                 <option disabled selected>
                     Size
                 </option>
                 <option>S</option>
                 <option>M</option>
                 <option>L</option>
                 <option>XL</option>
                 <option>XLL</option>
             </select>
         </div>
        <div className="filter-2">
            Sort Products :
           <select onChange={(e)=>setSort(e.target.value)}>
               <option value='newest'>Newest</option>
               <option value='asc'>Price (asc)</option>
               <option value='desc'>Price (desc)</option>
           </select>
        </div>
     </div>
     <Products category={cat} filters={filters} sort={sort} />
     <Newsletter/>
     <Footer/>
    </div>
      </>
  )
}

export default ProductList