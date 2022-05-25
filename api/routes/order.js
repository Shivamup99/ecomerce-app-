import express from 'express'
import { addOrder, deleteOrder, getOrder, getOrders, orderStats, updateOrder } from '../controllers/order.js'
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuth } from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/order',verifyToken,addOrder)
router.put('/order/:id',verifyTokenAndAdmin,updateOrder)
router.delete('/order/:id',verifyTokenAndAdmin,deleteOrder)
router.get('/order/find/:userId',verifyTokenAndAuth,getOrder)
router.get('/order' , verifyTokenAndAdmin,getOrders)
router.get('/order/income',verifyTokenAndAuth,orderStats)


export default router;