const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    const token = authHeader.split(' ').at(1);
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;


    if (authHeader) {
        jwt.verify(token, JWT_SECRET_KEY, (err, user) => {
            if (err) {
                console.log('Error')
                return res.status(403).json({ message: 'Token is not valid!' })
            }
            req.user = user;
            next()
        })

    } else {
        return res.status(401).json({ message: 'You are not authenticated' })
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that!");
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('You are not allowed to do that!')
        }
    })
}
module.exports = {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
};