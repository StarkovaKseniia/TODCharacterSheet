const mongoose = require('mongoose');
const { Schema } = mongoose;

const general_infoSchema = new Schema({
    name: String, //num якщо ENUM Number
    description: [String]
});

//mongoose.model('general_infos', general_infoSchema);
module.exports = general_infoSchema;