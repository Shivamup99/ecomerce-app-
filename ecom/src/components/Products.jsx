import React, { useEffect, useState } from 'react'
import './style/product.css'
import {FavoriteBorderOutlined, Search, ShoppingCartOutlined} from '@material-ui/icons'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Products = ({category,filters,sort}) => {
    const [products,setProducts] = useState([])
    const [filterdProducts,setFilterdProducts] = useState([])
    useEffect(()=>{
        const getProducts = async()=>{
            try {
                const res =  await axios.get(category ? `http://localhost:5000/api/product?category=${category}`
                :`http://localhost:5000/api/product`
                )
            setProducts(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProducts();
    },[category])
    
    useEffect(()=>{
        category && setFilterdProducts(
            products.filter(item=>Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
            ))
        )
    },[products,category,filters])

    useEffect(()=>{
        if((sort==='Newest')){
            setFilterdProducts((prev)=>
            [...prev].sort((a,b)=>a.createdAt-b.createdAt)
            )
        } else if((sort==='asc')){
            setFilterdProducts((prev)=>
            [...prev].sort((a,b)=>a.price-b.price)
            )
        } else{
            setFilterdProducts((prev)=>
            [...prev].sort((a,b)=>b.price-a.price)
            )
        }
    })
  return (
    <div className='products'>
        {
            category ?
            filterdProducts.map((item,i)=>(
                <div className="product-item" key={i}>
                    <img src={item.img} alt={item.id} className='product-img'/>
                   <div className="pro-icons">
                       <div className="love">
                       <FavoriteBorderOutlined/>
                       </div>
                      <div className="shop">
                      <ShoppingCartOutlined/>
                      </div>
                      <div className="search-io">
                      <Search/>
                      </div>
                   </div>
                   
                </div>
            )) :(
                products.map((item,i)=>(
                    <div className="product-item" key={i}>
                        <img src={item.img} alt={item.id} className='product-img'/>
                       <div className="pro-icons">
                           <div className="love">
                           <FavoriteBorderOutlined/>
                           </div>
                          <div className="shop">
                          <ShoppingCartOutlined/>
                          </div>
                          <div className="search-io">
                              <Link to={`/product/${item._id}`} style={{color:'green'}}>
                              <Search/>
                              </Link>
                          </div>
                       </div>
                       
                    </div>
                ))
            )
        }
        
    </div>
  )
}

export default Products