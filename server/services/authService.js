const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');


const emailValidator = (email) => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const isValidEmail = emailPattern.test(email)
    return isValidEmail;
}

const passwordValidator = (password, repeatPassword) => {
    if (password !== repeatPassword) {
        return false;
    }
    return true;
}

const validateSignUp = async (username, email, password, repeatPassword) => {
    let infoObj = {
        isValid: false,
        messages: [],
    }

    const foundUsername = await User.findOne({ username });
    const foundEmail = await User.findOne({ email });
    const isValidEmail = emailValidator(email);
    const isValidPassword = passwordValidator(password, repeatPassword);

    if (isValidEmail && isValidPassword && !foundUsername && !foundEmail) {
        infoObj.isValid = true;
    }

    if (foundUsername) {
        infoObj.message = "A user with this username already exists";
    }
    if (foundEmail) {
        infoObj.message = "A user with this email already exists";
    }
    if (!isValidEmail) {
        infoObj.message = "Invalid email";
    }
    if (!isValidPassword) {
        infoObj.message = "Passwords do not match";
    }
    return infoObj;
}
module.exports = {
    emailValidator,
    passwordValidator,
    validateSignUp,
}