const mongoose=require('mongoose');
const {Schema}=mongoose

const RatingSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required: true
    },
    rating:{
        type:Number,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now(),
    }
})

const Rating=mongoose.model('ratings',RatingSchema);

module.exports=Rating;