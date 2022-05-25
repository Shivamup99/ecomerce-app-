import User from '../modals/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    const Previoususer = await User.findOne({email:req.body.email})
    if(Previoususer){
        return res.status(400).json('User allready registerd')
    } 
    const salt = bcrypt.genSaltSync(10)
    const hash =  bcrypt.hashSync(req.body.password,salt)
    try {
        let newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash
        })
        let saveUser = await newUser.save();
        res.status(201).json(saveUser)   
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const login = async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user) return res.status(404).json('User not found')
        const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password)
        if(!isPasswordCorrect) return res.status(401).json('wrong password')
        
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT_SECRET,{expiresIn:'1d'})
        const {password, ...otherDetails} = user._doc
        res.status(201).json({...otherDetails,token})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
  } 