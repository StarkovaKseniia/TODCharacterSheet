const mongoose = require('mongoose');
const { Schema } = mongoose;
const CharacterSchema = require('./Character');

const directorySchema = new Schema({
    name: String, 
    characters: [CharacterSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('directories', directorySchema);