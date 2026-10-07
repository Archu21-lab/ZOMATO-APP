const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

async function registrUser(req, res) {
  const { fullname, email, password } = req.body;

  const isAlreadyUserExist = await userModel.findOne({
    email,
  });

  if (isAlreadyUserExist) {
    return res.status(400).json({
      message: "user already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullname,
    email,
    password: hashedPassword,
  });
}
