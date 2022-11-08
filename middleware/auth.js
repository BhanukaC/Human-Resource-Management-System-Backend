const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
    req.ip = "123"; req.user = { id: 136, username: "BhanukaC" };

    next();
}

module.exports = validateToken;
