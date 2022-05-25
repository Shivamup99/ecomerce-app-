import mongoose from "mongoose";

const createProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
    },
    color:{
        type:Array,
    },
    size:{
        type:Array,
    },
    inStock:{
        type:Boolean,
        default:true
    },
    price:{
        type:Number,
        required:true
    }
    
},{timestamps:true})

const productSchema = mongoose.model('Product',createProductSchema)
export default productSchema