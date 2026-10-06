const userModel = require("../models/user.model");

async function registrUser(req, res) {
  const { fullname, email, password } = req.body;

  const isAlreadyUserExist = await userModel.findOne({
    email
  })

  if(isAlreadyUserExist){
    return res.status(400).json({
        
    })
  }
}
