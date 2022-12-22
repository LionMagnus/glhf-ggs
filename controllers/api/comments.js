const Tournament = require('../../models/tournament');

module.exports = {
  /* index, */
  create
};

/* async function index(req, res) {
  let tournament = await Tournament.findById(req.params.id);
  const comments = await tournament.comments.find({});
  res.json(comments)
} */

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    let tournament = await Tournament.findById(req.params.id);
    tournament.comments.push(req.body);
    tournament.save();
    res.json(tournament);
  } catch (err) {
    res.status(400).json(err);
  }
}