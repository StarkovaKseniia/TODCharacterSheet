const mongoose = require('mongoose');
const { Schema } = mongoose;

const abilitySchema = new Schema({
    name: String,
    score: {type: Number, default: 10}, 
    modifier: Number, 
    save_modifier: Number, 
    save_adv: {type: Boolean, default: false}, 
    save_disadv: {type: Boolean, default: false}, 
    save_prof: {type: Boolean, default: false} 
});

//mongoose.model('abilities', abilitySchema);
module.exports = abilitySchema;