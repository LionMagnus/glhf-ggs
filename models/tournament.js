const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
    title: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    description: {type: String, default: 'No Description added Yet'},
    location: {type: String, required: true},
    date: {type: Date, required: true},
    rules: {type: String, default: 'No Rules added Yet'},
    logoUrl: {type: String},
}, {
    timestamps: true
});

module.exports = mongoose.model('Tournament', tournamentSchema);