import User from '../modals/user.js'
import bcrypt from 'bcryptjs'
import router from '../routes/user.js'
import { verifyTokenAndAdmin } from '../middleware/verifyToken.js'

export const updateUser = async(req,res)=>{
    // const salt = bcrypt.genSaltSync(10)
    // req.body.password = bcrypt.hashSync(req.body.password,10)
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
    },{new:true})
    res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteUser = async(req,res)=>{
   try {
    const user = await User.findByIdAndDelete(req.params.id)
    if(user){
        res.status(200).json('user deleted')
    } else{
        res.status(400).json('user not found')
    }
   } catch (error) {
       res.status(500).json({message:error.message})
   }
}
// get all latest user by limited query
export const getUsers = async(req,res)=>{
    const query = req.query.new
    try {
        const user =query ? await User.find().sort({_id:-1}).limit(5):await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getUser = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password , ...others} = user._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// get user stats

export const userStats = async(req,res)=>{
    const date = new Date();
    const lastYear = new Date(date.getFullYear(date.getFullYear()-1));
    try {
        const data = await User.aggregate([
            {$match:{createdAt:{$gte:lastYear}}},
            {
                $project:{
                    month: {$month:'$createdAt'},
                },
            },
                {
                    $group:{
                        _id:'$month',
                        total:{$sum:1}
                    }
                },
        ])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}