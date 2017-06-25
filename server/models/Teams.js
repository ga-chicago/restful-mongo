var mongoose = require('mongoose');

var TeamsSchema = new mongoose.Schema({
    name: String,
    city: String,
    conference: String,
    division: String,
    standing: Number,
    
})

var teamsModel = mongoose.model('Teams', TeamsSchema);

module.exports = teamsModel;
