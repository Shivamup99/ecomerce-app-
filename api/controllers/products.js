import Product from '../modals/product.js'

export const addProduct = async(req,res)=>{
    try {
    const product = new Product(req.body)
    const addProduct = await product.save()
    res.status(201).json(addProduct)
    } catch (error) {
      res.status(500).json({message:error.message})  
    }
}

export const updateProduct  = async(req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,{
            $set: req.body
    },{new:true})
    res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteProduct = async(req,res)=>{
    try {
     const product = await Product.findByIdAndDelete(req.params.id)
     if(product){
         res.status(200).json('product deleted')
     } else{
         res.status(400).json('product not found')
     }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 }

 export const getProduct = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//get all product with conditions
export const getProduts = async(req,res)=>{
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let product
        if(qNew){
            product = await Product.find().sort({_id:-1}).limit(5)
        } else if(qCategory){
            product = await Product.find({categories:{
                $in:[qCategory]
            }})
        } else{
            product= await Product.find()
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}