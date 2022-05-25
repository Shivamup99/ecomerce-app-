import express from 'express'
import { addCart, deleteCart, getCart, getCarts, updateCart } from '../controllers/cart.js'

import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuth } from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/cart',verifyToken,addCart)
router.put('/product/:id',verifyTokenAndAuth,updateCart)
router.delete('/product/:id',verifyTokenAndAuth,deleteCart)
router.get('/cart/find/:userId',getCart)
router.get('/cart' , verifyTokenAndAdmin,getCarts)

export default router;