const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    first_name: {
        type: String,
        required: true,
        maxlength: 50,
    },    
    last_name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    gender: {
        type: String,
        trim: true,
    },
    dob: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
        maxlength: 150,
    },
    password: {
        type: String, 
        minlength: 8,
        maxlength: 20,
        tirm: true,
        required: true
    },
    addresses: [
        {
            house_number: {type: String, required: true, maxlength: 20},
            postcode: {type: String, required: true, maxlength: 8}
        }
    ],
    phone: {
        type: String,
    },
    location: {
        type: [Number], 
        index: { type: '2dsphere', sparse: true}
    },

}, {
    timestamps: true,
});

const User = mongoose.model('User',userSchema);

module.exports = User;