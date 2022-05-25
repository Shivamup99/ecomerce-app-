import Order from '../modals/order.js'

export const addOrder = async(req,res)=>{
    try {
    const order = new Order(req.body)
    const addOrder = await order.save()
    res.status(201).json(addOrder)
    } catch (error) {
      res.status(500).json({message:error.message})  
    }
}

export const updateOrder  = async(req,res)=>{
    try {
        const order = await Order.findByIdAndUpdate(req.params.id,{
            $set: req.body
    },{new:true})
    res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteOrder = async(req,res)=>{
    try {
     const order = await Order.findByIdAndDelete(req.params.id)
     if(order){
         res.status(200).json('order deleted')
     } else{
         res.status(400).json('order not found')
     }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
 }

 export const getOrder = async(req,res)=>{
    try {
        const order = await Order.find({userId:req.params.userId})
        res.status(200).json(order)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getOrders = async(req,res)=>{
   try {
       const order = await Order.find()
       res.status(200).json(order) 
   } catch (error) {
       res.status(500).json({message:error.message})
   }
}

// order stats of montly income

export const orderStats = async(req,res)=>{
   const date = new Date()
   const lmonth = new Date(date.setMonth(date.getMonth()-1));
   const preMonth = new Date(new Date().setMonth(lmonth.getMonth()-1))

   try {
       const income = await Order.aggregate([
           {$match:{createdAt:{$gte:preMonth}}},
           {
               $project:{
                   month:{$month:'$createdAt'},
                   sales:'$amount'
               },
           },
           {
               $group:{
                   _id:'$month',
                   total:{$sum:'$sales'}
               }
           }

       ])
       res.status(200).json(income)
   } catch (error) {
       res.status(500).json({message:error.message})
   }
}