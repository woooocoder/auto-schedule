const mongoose = require('mongoose');
const Schedule = new mongoose.schema({
    dates: {
        type: String,
        required: True
    },

    users: [UserSchema], 
    admins: [UserSchema] // where adminStatus = true
})

module.exports = mongoose.model('Schedule', ScheduleSchema);
