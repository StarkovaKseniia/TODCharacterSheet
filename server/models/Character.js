const mongoose = require('mongoose');
const { Schema } = mongoose;
const General_infoSchema = require('./General_info');
const AbilitySchema = require('./Ability');
const SkillSchema = require('./Skill');
const InvolvementSchema = require('./Involvement');
const DefenceSchema = require('./Defence');
const ArmorSchema = require('./Armor');
const HealthSchema = require('./Health');

const characterSchema = new Schema({
    character_info: [General_infoSchema],
    level: {type: Number, default: 1}, 
    abilities: [AbilitySchema],
    luck: Number,
    skills: [SkillSchema],
    involvements: [InvolvementSchema],
    defence: DefenceSchema,
    armor: [ArmorSchema],
    resistance: General_infoSchema,
    immunity: General_infoSchema,
    health: HealthSchema,
    hit_dice_amount: Number, 
    hit_dice_value: String,
    deathsave_adv:{type: Boolean, default: false}, 
    deathsave_disadv: {type: Boolean, default: false}, 
    success_rolls: Number, 
    fail_rolls: Number, 
    exhaustion: {type: Number, default: 0},
    concentration: General_infoSchema,
    conditions: General_infoSchema,
    _directory: { type: Schema.Types.ObjectId, ref: 'Directory' },
    //_user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('characters', characterSchema);
module.exports = characterSchema;