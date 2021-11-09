const emailValidator = (email) => {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const isValidEmail = emailPattern.test(email)
    return isValidEmail;
}


module.exports = {
    emailValidator,
}