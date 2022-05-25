import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
const Stripe = () => {
    const [stripeToken,setStripeToken] = useState(null)

    const onToken =(token)=>{
        setStripeToken(token)
    }
    useEffect(()=>{
        const makePay = async()=>{
            try {
              const res = await axios.post('http://localhost:5000/api/payment',
              {
                  tokenId:stripeToken.id,
                  amount:2000
              }) 
              console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makePay()
    },[stripeToken])
  return (
    <StripeCheckout token={onToken} amount={20000} 
    stripeKey="pk_test_51IGGftG9WGGZMzGMI8sFSCw8Eb8nwwfhMkzTZPdBs1QrPmIwPndeNGqfM8OIsgMbGQjrwFXuIGZ0X0rUgEmnn3yL008nBhLoi9" 
    shippingAddress billingAddress>
    <button className="btn" style={{marginLeft:'300px' ,marginBottom:'20px'}}>Book now</button>
    </StripeCheckout>
  )
}

export default Stripe