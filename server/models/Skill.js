const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
    name: String,
    modifier: Number, 
    advantage: {type: Boolean, default: false}, 
    disadvantage: {type: Boolean, default: false}, 
    proficiency: {type: Boolean, default: false},
    _ability: { type: Schema.Types.ObjectId, ref: 'Ability' }
});

//mongoose.model('skills', skillSchema);
module.exports = skillSchema;