import express from 'express'
import { login, register } from '../controllers/auth.js'
import { deleteUser, getUser, getUsers, updateUser, userStats } from '../controllers/user.js'
import { verifyTokenAndAdmin, verifyTokenAndAuth } from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/register',register)
router.post('/login',login)
router.put('/user/:id',verifyTokenAndAuth,updateUser)
router.delete('/user/:id',verifyTokenAndAuth,deleteUser)
router.get('/user/find/:id',verifyTokenAndAdmin,getUser)
router.get('/user',verifyTokenAndAdmin,getUsers)
router.get('/user/stats',verifyTokenAndAdmin,userStats)
export default router