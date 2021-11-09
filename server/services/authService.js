const express = require('express');
const mongoose = require('mongoose');
const CryptoJS = require("crypto-js");
const User = require('../models/User');

const PASS_SECRET = process.env.PASS_SECRET;

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
const validateSignUp = (username, email, password, repeatPassword) => {
    //TODO: Check if username and email are in the db
    const isValidEmail = emailValidator(email);
    const isValidPassword = passwordValidator(password, repeatPassword);

    if (isValidEmail && isValidPassword) {
        return true;
    }
    return false;
}


const saveUser = async (username, email, password) => {

    const userModel = new User({
        username,
        email,
        password: CryptoJS.AES.encrypt(password, PASS_SECRET).toString()
    });
    console.log('user model', userModel);
    user = userModel.save();
    return user;
}

module.exports = {
    emailValidator,
    passwordValidator,
    validateSignUp,
    saveUser,
}