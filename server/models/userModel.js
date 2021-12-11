const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    firstName: {
        tpye: String,
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    houseNumber : { 
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    street : {
        tpye : String,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isWorker: {
        type: Boolean,
        default: false,
    },
    reservations: [],
    orders : []
})


userSchema.pre('save', function (next) {
    bcrypt.genSalt(10)
        .then(salt => {
            return bcrypt.hash(this.password, salt)
        })
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(error => {
            console.log(error);
        })
});


module.exports = mongoose.model('user', userSchema);