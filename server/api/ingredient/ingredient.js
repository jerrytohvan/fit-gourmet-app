const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
    {
        _id:{type: String,required: true, unique: true},
        name:{type: String,required: true, unique:true},
        cost:{type: String, required: true},
        // weight:{type: Number,required: true},
    }
);

module.exports = mongoose.model('Ingredient', ingredientSchema);