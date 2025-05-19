const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthSchema = new Schema({
    current: Number, 
    temporary: Number, 
    max: Number
});

//mongoose.model('healthes', healthSchema);
module.exports = healthSchema;