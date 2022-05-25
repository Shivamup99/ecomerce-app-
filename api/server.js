import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
const PORT = process.env.PORT || 5000
dotenv.config()
import auth from './routes/user.js'
import product from './routes/products.js'
import cart from './routes/cart.js'
import order from './routes/order.js'
import payment from './routes/stripe.js'
const app = express()
app.use((express.json()))
app.use(cors())

const url = process.env.MONGO_URL
mongoose.connect(url).then(()=>console.log('Database Active')).catch(err=>console.log(err))

app.use('/api',auth)
app.use('/api',product)
app.use('/api',cart)
app.use('/api',order)
app.use('/api',payment)
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})