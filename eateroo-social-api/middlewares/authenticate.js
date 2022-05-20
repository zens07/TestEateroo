const { verifyToken } = require("../helpers/jwt");

const authenticate = async (req, res, next) => {
  try {
    const api_key = req.headers.api_key;
    const token = req.headers.access_token;
    if (token) {
      // check for token
      const decoded = await verifyToken(token, process.env.SECRET);
      let userData = await mst_user.findOne({
        include: [mst_organization, mst_branch, mst_role],
        where: { id_user: decoded.id_user },
      });
      if (userData === null) {
        throw {
          name: "Custom_Error",
          message: "User Not Found",
          status: 400,
        };
      }
      delete userData.dataValues.password;
      delete userData.dataValues.access_token;
      req.user = userData.dataValues;
      next();
    } else {
      throw "Invalid Token / API Key";
    }
  } catch (error) {
    res.status(401).json({
      message: error,
    });
  }
};

module.exports = authenticate;
