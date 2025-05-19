const mongoose = require('mongoose');
const { Schema } = mongoose;

const defenceSchema = new Schema({
    armor_class: Number, 
    shield_value: Number, 
    is_shield: {type: Boolean, default: false}
});

//mongoose.model('defences', defenceSchema);
module.exports = defenceSchema;