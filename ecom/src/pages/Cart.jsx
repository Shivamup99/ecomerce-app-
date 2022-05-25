import React,{useEffect, useState} from 'react'
import './style/cart.css'
import {Link} from 'react-router-dom'
import {Add, Delete, Remove} from '@material-ui/icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../app/makeRequest'
const Cart = () => {
    const KEY ='pk_test_51IGGftG9WGGZMzGMI8sFSCw8Eb8nwwfhMkzTZPdBs1QrPmIwPndeNGqfM8OIsgMbGQjrwFXuIGZ0X0rUgEmnn3yL008nBhLoi9'
    const [stripeToken,setStripeToken] = useState(null)
    const cart = useSelector(state=>state.cart)
    const onToken =(token)=>{
        setStripeToken(token)
    }
    useEffect(()=>{
        const makeRequest = async()=>{
            try {
                const res = await userRequest.post('/user/payment',{
                    tokenId:stripeToken.id,
                    amount:cart.total*100
                })
                alert('payemt done succesfully')
            } catch (error) {
               console.log(error) 
            }
        }
        stripeToken && makeRequest();
    },[stripeToken,cart.total])
  return (
      <>
      <Navbar/>
       <div className="wrapper">
        <h3 className="title">
            your bag
        </h3>
        <div className="top">
            <button className="topButton">
                continue shopping
            </button>
            <div className="topTexts">
             <div className="topText">
                 Shopping Bag (2)
             </div>
             <div className="topText">
                 Your Wishlist (0)
             </div>
            </div>
            <button className="topButton">
                checkout now
            </button>
        </div>
        <div className="cart-bottom">
            <div className="cart-info">
                { 
                cart.products?.map((product)=>(
                    <>
                    <div className="cart-pro">
                    <div className="cart-pro-detail" key={product._id}>
                        <img src={product.img}
                         alt='dd' className='cart-pro-img'/>
                         <div className="cart-pro-detail-info">
                             <div className="pro-name">
                                 <b>Product : </b> {product.title}
                             </div>
                             <div className="pro-id">
                                 <b>ID : </b> {product._id}
                             </div>
                             <div className="pro-colo"></div>
                             <div className="cart-pro-size"><b>Size : </b>{product.size} </div>
                         </div>
                    </div>
                    <div className="price-detail">
                        <div className="pro-ammounts">
                            <Add/>
                            <span className="cart-amount">
                                {product.quantity}
                            </span>
                            <Remove/>
                        </div>
                        <div className="act-price">
                            $ {product.price * product.quantity}
                        </div>
                    </div>
                </div>
                  <div className='hr'></div> 
                  </>
                ))
                }
              

                {/* */}
            </div>
            <div className="cart-summary">
                <div className="summary-title">Order Summary</div>
                <div className="summary-item">
                    <div className="summary-text">
                        Subtotal
                    </div>
                    <div className="summary-price">
                        $ {cart.total}
                    </div>
                </div>
                <div className="summary-item">
                    <div className="summary-text">
                        Estimated Shipping
                    </div>
                    <div className="summary-price">
                        $ 5.90
                    </div>
                </div>
                <div className="summary-item">
                    <div className="summary-text">
                        Shipping Discount
                    </div>
                    <div className="summary-price">
                        $ -6
                    </div>
                </div>
                <div className="summary-item">
                    <div className="summary-text" style={{fontSize:'22px', fontWeight:'400'}}>
                        Total
                    </div>
                    <div className="summary-price" style={{fontSize:'22px',color:'brown'}}>
                        $ {cart.total}
                    </div>
                </div>
                <StripeCheckout name='Hayroo Shop' billingAddress
                 shippingAddress description={`Your total is ${cart.total}`}
                 amount={cart.total*100} token={onToken}
                 stripeKey={KEY}
                 >
                <button className="but-check">Checkout Now</button>
                </StripeCheckout>
            </div>
        </div>
        <div className="bottom"></div>
    </div>
    <Footer/>
      </>
   
  
  )
}

export default Cart