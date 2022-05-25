import express from 'express'
import { addProduct, deleteProduct, getProduct, getProduts, updateProduct } from '../controllers/products.js'
import { verifyTokenAndAdmin } from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/product',verifyTokenAndAdmin,addProduct)
router.put('/product/:id',verifyTokenAndAdmin,updateProduct)
router.delete('/product/:id',verifyTokenAndAdmin,deleteProduct)
router.get('/product/find/:id',getProduct)
router.get('/product',getProduts)

export default router;