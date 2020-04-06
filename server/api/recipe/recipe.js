const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        _id:{type: String,required: true, unique: true},
        name:{type: String,required: true, unique:true},
        diettype:[{type: String}],
        allergies:[{type: String,default:"None"}],
        recipeCounter:{type: Number,default: 0},
        total_cost:{type: Number},
        ingredients:[
            {
                _id:{required:false},
                ingredientName:{type:String,required:true},
                weight:{type:Number,required:true},
                cost:{type:Number,required:true},
                quantity:{type:Number,required:true,default: 1}
            }
        ]
    }
);

module.exports = mongoose.model('Recipe', recipeSchema);