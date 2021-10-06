const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


async function register({ email, username, password, repeatPassword }) {

    if (!email || !username || !password || !repeatPassword) {
        throw ({ message: "All fields are required!" });
    }
    if (email.length < 4) {
        throw ({ message: "Email must be at least 4 characters long!" });
    }
    if (username.length < 4) {
        throw ({ message: "Username must be at least 4 characters long!" });
    }
    if (password !== repeatPassword) {
        throw ({ message: "Passwords do not match!" });
    }
    const isUserExist = await userModel.findOne({ username: username.toLowerCase().trim() });
    const isEmailExist = await userModel.findOne({ email: email.toLowerCase().trim() })
   
    if (isEmailExist) {
        throw ({ message: "This email is already taken!" });
    }
    if (isUserExist) {
        throw ({ message: "This username is already taken!" });
    }

    const user = new userModel({ email: email.toLowerCase().trim(), username: username.toLowerCase().trim(), password: password.trim() })
    user.save();

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_WORD);
    return token;

}

async function login({ username, password }) {
    if (!username, !password) {
        throw ({ message: "All fields are required!" });
    }
    const isUserExists = await userModel.findOne({ username: username.toLowerCase().trim() });
    if (!isUserExists) {
        throw ({ message: 'This user does not exists!' });
    }
    const isPasswordMatch = await bcrypt.compare(password.trim(), isUserExists.password.trim());
    if (!isPasswordMatch) {
        throw ({ message: 'Invalid Password!' });
    }
    const token = jwt.sign({ _id: isUserExists._id }, process.env.SECRET_WORD);

    return token;
}


module.exports = {
    register,
    login,
}