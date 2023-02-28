const { StatusCodes } = require("http-status-codes");
const User = require("../model/user");
const Scores = require("../model/scores");
const create = async (req, res) => {
  const { data } = req.body;
  await User.create({ ...data });
  res.status(StatusCodes.OK).send("done");
};

const answer = async (req, res) => {
  var { data } = req.body;
  if (!data) return res.status(StatusCodes.BAD_REQUEST).send("data required");
  const rightOnes = await User.findOne({ name: req.params.name });
  if (!rightOnes) return res.status(StatusCodes.BAD_REQUEST).send("Not found");
  var keys = Object.keys(data);
  keys = keys.filter((key) => {
    if (key === "name") return;
    if (data[key] === rightOnes[key]) {
      return key;
    }
  });
  const score = keys.length;
  await Scores.create({ who: data.name, whom: req.params.name, score });
  res.status(StatusCodes.OK).send("done");
};
const scores = async (req, res) => {
  const { name } = req.params;
  if (!name) return res.status(StatusCodes.BAD_REQUEST).send("name required");
  const scores = await Scores.find({ whom: name });
  res.status(StatusCodes.OK).json({ scores });
};
const checking = async (req, res) => {
  const name = req.params.name;
  if (!name) return res.status(StatusCodes.BAD_REQUEST).send("name required");
  const user = await User.findOne({ name });
  var exist = false;
  if (user) exist = true;
  res.status(StatusCodes.OK).json({ result: exist });
};

module.exports = { create, answer, scores, checking };
