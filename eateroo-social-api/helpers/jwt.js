const jwt = require('jsonwebtoken');

const generateToken = async (payload) => jwt.sign(payload, process.env.SECRET);
const verifyToken = async (token) => jwt.verify(token, process.env.SECRET);

module.exports = {
    generateToken,
    verifyToken
}
