const { Users } = require("../../models/index");
const { comparePassword, hashPassword } = require("../../helpers/passHelper");
const { generateToken } = require("../../helpers/jwt");
const { Op, Sequelize } = require("sequelize");

class UserController {
  static async view(req, res, next) {
    try {
      const data = await Users.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password, user_name } = req.body;
      let access_token;
      const checkUser = await Users.findOne({
        where: { email },
      });
      if (!checkUser) {
        throw {
          name: "Custom_Error",
          message: "Invalid email or password",
          status: 400,
        };
      }

      const comparedPass = await comparePassword(password, checkUser.password);

      if (!comparedPass) {
        throw {
          name: "Custom_Error",
          message: "Invalid email or password",
          status: 400,
        };
      }
      access_token = await generateToken({
        id: checkUser.id,
        user_name: checkUser.user_name,
        email: checkUser.email,
      });

      const data = await Users.findOne({
        where: {
          id: checkUser.id,
        },
      });
      delete data.dataValues.password;
      data.dataValues.access_token = access_token;
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { full_name, password, email } = req.body;
      const checkUser = await Users.findOne({
        where: {
          email,
        },
      });
      if (checkUser) {
        throw {
          name: "Custom_Error",
          message: "email is exist in server",
          status: 400,
        };
      }
      const user_name = full_name.split(" ").join("_");
      const data = await Users.create({
        user_name,
        full_name,
        password,
        email,
      });
      delete data.dataValues.password;
      data.dataValues.access_token = await generateToken({
        id: data.id,
        user_name: data.user_name,
        email: data.email,
      });

      res.status(201).json({ data: data, message: "Success" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UserController;
