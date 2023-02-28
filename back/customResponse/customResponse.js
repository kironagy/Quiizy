// CUSTOM RESPONSE MIDDLEWARE
const { StatusCodes } = require("http-status-codes");

const custom = (req, res) => {
  // SEND THD FOLLOWING MESSAGE IF THE USER ASKED FOR WRONG PATH OR METHOD
  res
    .status(StatusCodes.BAD_REQUEST)
    .send(`Can't Do ${req.method} method on ${req.url} path`);
};

module.exports = custom;
