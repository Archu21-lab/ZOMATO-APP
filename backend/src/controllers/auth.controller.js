const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

  const token = jwt.sign(
    {
      id: user._id,
    },
    "330b16cbbfeb46e88447dd6e6ba87598913db302",
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user resitered successfully",
    user: {
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
    },
  });
}

async function loginUser(req, res) {}

module.exports = {
  registrUser,
  loginUser,
};
