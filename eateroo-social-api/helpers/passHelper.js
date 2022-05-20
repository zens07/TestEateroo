const bcrypt = require('bcrypt');

const hashPassword = async password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)
}

const comparePassword = async (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword)
}

module.exports = { hashPassword, comparePassword }