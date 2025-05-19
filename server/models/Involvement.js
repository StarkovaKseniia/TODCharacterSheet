const mongoose = require('mongoose');
const { Schema } = mongoose;

const involvementSchema = new Schema({
    name: String,
    modifier: Number,
    advantage: {type: Boolean, default: false}, 
    disadvantage: {type: Boolean, default: false},
    _skill: { type: Schema.Types.ObjectId, ref: 'Skill' }
});

//mongoose.model('involvements', involvementSchema);
module.exports = involvementSchema;