// started from here today 25 aug 2023

// check username,password is post(login) request
//if exist create new JWT
//send back to front-end
//setup authentication so only the request with jwt can access the dashboards

const jwt = require('jsonwebtoken');

const { BadRequestError } = require('../errors');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequestError('Please Provide email and password');
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(200).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
  const luckNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello,${req.user.username}`,
    secret: `Here is your authorized data,your luck Number is ${luckNumber}`,
  });
};

module.exports = { login, dashboard };
