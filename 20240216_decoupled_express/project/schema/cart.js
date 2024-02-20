const  mongoose = require('mongoose')

const cart = new mongoose.Schema({
    productName: {
        type: String,
        required : true
    },
    address: {
        type: String,
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        min: 1,
        required: true
    },
    cost:{
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("cart",cart)