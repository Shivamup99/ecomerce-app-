import Cart from '../modals/cart.js'

export const addCart = async(req,res)=>{
    try {
    const cart = new Cart(req.body)
    const addCart = await cart.save()
    res.status(201).json(addCart)
    } catch (error) {
      res.status(500).json({message:error.message})  
    }
}

export const updateCart  = async(req,res)=>{
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
    },{new:true})
    res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteCart = async(req,res)=>{
    try {
     const cart = await Cart.findByIdAndDelete(req.params.id)
     if(cart){
         res.status(200).json('cart deleted')
     } else{
         res.status(400).json('cart not found')
     }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 }

 export const getCart = async(req,res)=>{
    try {
        const cart = await Cart.findOne({userId:req.params.userId})
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getCarts = async(req,res)=>{
   try {
       const cart = await Cart.find()
       res.status(200).json(cart) 
   } catch (error) {
       res.status(500).json({message:error.message})
   }
}