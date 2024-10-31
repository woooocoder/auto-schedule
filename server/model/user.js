const mongoose = require('mongoose');
const UserSchema = new mongoose.schema({
    username: String,
    password: String,
    adminStatus: Boolean,
    email: String,
    availibility: {
        monday: [hours],
        tuesday: [hours]
    },

    _id: Uint16Array,
    woekingHours: [{ 
        role: String,
        date: Date,
        startTime: String,
        endTime: String, 
        startBreakTime: String,
        endBreakTime: String,
    }]
})

module.exports = mongoose.model('User', UserSchema);
