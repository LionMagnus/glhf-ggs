const Tournament = require('../../models/tournament');

module.exports = {
  index,
  create,
  remove,
  edit
};

async function index(req, res) {
  const tournaments = await Tournament.find({});
  res.json(tournaments);
};

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const tournament = await Tournament.create(req.body);
    tournament.save();
    res.json(tournament);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function remove(req, res) {
  await Tournament.findOneAndDelete({_id: req.params.id, user: req.user._id});
  const tournament = await Tournament.find({user: req.user._id});
  res.json(tournament);
}

async function edit(req, res) {
  const updatedItem = await Tournament.findOneAndUpdate(
      {_id: req.params.id},
      {
          title: req.body.title,
          description: req.body.description,
          location: req.body.location,
          date: req.body.date,
          rules: req.body.rules,
      },
      {new: true}
  );
  const tournament = await Tournament.find({user: req.user._id});
  res.json(updatedItem)
}