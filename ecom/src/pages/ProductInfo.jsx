import React, { useEffect, useState } from 'react'
import './style/proInfo.css'
import Navbar from '../components/Navbar'
import { Add, Remove } from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import { publicRequest } from '../app/makeRequest'
import { useSelector , useDispatch } from 'react-redux'
import { addProduct } from '../features/cartSlice'
// import { makeStyles } from '@material-ui/core';

// const useStyles = makeStyles({
//   firstStyle: {
//       backgroundColor: props => props.backgroundColor,
//       width:'20px',
//       height:'20px',
//       borderRadius:'50%',
//       ma
//   }
// });

const ProductInfo = () => {
  // const classes = useStyles(props);
  const dispatch = useDispatch()
  // const products = useSelector(state=>state.cart.product)
  const productId = useParams()
  const [product,setProduct] = useState({})
  const [quantity,setQuantity] = useState(1)
  const [size,setSize] = useState(null)
 // console.log(productId.id)
  useEffect(()=>{
    const getProduct = async()=>{
      try {
        const res = await publicRequest.get(`/product/find/${productId.id}`)
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  },[productId])

  const handleQuantity =(type)=>{
    if(type==='dec'){
      quantity > 1 && setQuantity(quantity-1)
    }
    if(type==='inc'){
      quantity < 5 && setQuantity(quantity+1)
    }
  }
  
  const handleClick =()=>{
     dispatch(addProduct({...product , quantity , size}))
  }

  return (
    <>
    <Navbar/>
     <div className='pro-info'>
    <div className="pro-img">
      <img src={product?.img} className='pro-info-img' alt='dd'/>
    </div>
    <div className="pro-text-info">
        <h2 className="info-title">
        {product?.title}
        </h2>
        <p className="info-desc">
       {product?.desc}
        </p>
        <p className="info-price">
            $ {product?.price}
        </p>
        <div className="info-clothes">
        <div className="info-color">
            <div className="color-text">Color</div>
            <div className="filter-color" style={{backgroundColor:'black',width:'20px',height:'20px',borderRadius:'50%',marginRight:'10px',cursor:'pointer'}}></div>
            <div className="filter-color" style={{backgroundColor:'red',width:'20px',height:'20px',borderRadius:'50%',marginRight:'10px',cursor:'pointer'}}></div>
            <div className="filter-color" style={{backgroundColor:'yellow',width:'20px',height:'20px',borderRadius:'50%',marginRight:'10px',cursor:'pointer'}}></div>
            </div>
            <div className="info-text">
            <div className="filter-text">
                Size
            </div>
            <select onChange={(e)=>setSize(e.target.value)}>
             <option selected disabled> Size</option>
             {product.size && product.size.map((s,i)=>
             <option key={i}>{s}</option>
             )}
            </select>
        </div>
        
        </div>
        <div className="add-clothes">
         <div className="amount">
             <Remove className='amount-icon' onClick={()=>handleQuantity('dec')}/>
             <span>{quantity}</span>
             <Add className='amount-icon'  onClick={()=>handleQuantity('inc')}/>
         </div>
         <button  className="add-btn" onClick={handleClick}>
             Add to Cart
         </button>
        </div>
    </div>
    </div>
    </>
  )
}

export default ProductInfo