import express from 'express'
import { payment } from '../controllers/stripe.js'
import { verifyToken, verifyTokenAndAuth } from '../middleware/verifyToken.js'
const router = express.Router()

router.post('/user/payment',payment)

export default router;