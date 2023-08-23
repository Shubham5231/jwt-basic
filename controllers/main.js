// started from here today 23 aug 2023

const { jwt } = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');
const login = async (req, res) => {
  const { username, password } = req.body;

  //mongo

  //check in the controller
  if (!username || !password) {
    throw new CustomAPIError('Please Provide email and password', 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET);

  //   res.send('Fake login/Register/Signup');
};

const dashboard = async (req, res) => {
  const luckNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello,Shubham`,
    secret: `Here is your authorized data,yout luck Number is ${luckNumber}`,
  });
};

module.exports = { login, dashboard };
