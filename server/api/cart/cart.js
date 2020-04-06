const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema(
    {
        _id:{type: String,required: true, unique: true},
        deliverydate:{type: Schema.Types.Date, required: true},
        orders: [
            {
                _id:{required: false},
                recipeId:{type: String},
                values: {type:Number, default:0},
                cost:{type: Number,default:0}
            }
        ]
    }
);

module.exports = mongoose.model('Cart', cartSchema);