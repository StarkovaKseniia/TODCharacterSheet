const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    googleId: String
});

mongoose.model('players', playerSchema);