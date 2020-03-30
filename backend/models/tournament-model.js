const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchoresheetSchema = new Schema({
    fieldTypes: [],
    fieldValues: [],
    teamNum: {
        type: Number,
        required: true,
    },
    scoreType: {
        type: String,
        default: "match",
    },
    finalScore: {
        type: Number,
        required: true
    },
    rawData: {
        type: Array,
        required: true
    }
});

//Create Tournament Schema
const TournamentSchema = new Schema({
    director: {
        type: String,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    volunteers: [], //don't use anymore

    /* Volunteer Roles */
    headReferee: [{
        type: String,
        ref: 'User'
    }],
    judgeAdvisor: [{
        type: String,
        ref: 'User'
    }],
    referees: [{
        type: String,
        ref: 'User'
    }],
    judges: [{
        type: String,
        ref: 'User'
    }],
    viewOnlyVols: [{
        type: String,
        ref: 'User'
    }],

    officialEventFlag: {
        type: Boolean,
        default: false,
    },
    teams: [{
        type: String,
        ref: 'Team'
    }],
    fieldsCount: {
        type: Number,
        required: true,
    },
    matchesPerTeam: {
        type: Number,
        default: 3,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
        default: Date.now,
    },
    scores: [SchoresheetSchema]
});

//Instance methods of the Schema
TournamentSchema.methods.addVolunteer = function(uId, uRole) {
    this.model.volunteer.add({user: uId, role: uRole})
};

//Create a model for schema instantiation
Tournament = mongoose.model('tournaments', TournamentSchema);

//Export the model for use by other javascript files
module.exports = Tournament;
