const mongoose = require('mongoose');
const { Schema } = mongoose;

const armorSchema = new Schema({
    name: String, 
    ac_value: Number, 
    is_wearable: {type: Boolean, default: false}
});

//mongoose.model('armors', armorSchema);
module.exports = armorSchema;