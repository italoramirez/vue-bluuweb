const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
     name: {
         type    : String,
         required: true,
         min     : 6,
         mas     : 255  
     },
     email: {
        type    : String,
        required: true,
        min     : 6,
        max     : 255
     },
     password: {
        type    : 'string',
        required: true,
        min     : 6,
        max     : 255
     },
     date: {
        type   : Date,
        default: Date.now
     }
});

module.exports = mongoose.model('User', userSchema);