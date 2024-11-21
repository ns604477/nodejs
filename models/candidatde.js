const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    party: { type: String, required: true },
    age: { type: Number },
    votes: [{
        user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
        votedAt: { type: Date, default: Date.now },
        voteCount: { type: Number, default: 0 }
    }]
});

module.exports = mongoose.model('Candidate', candidateSchema);
