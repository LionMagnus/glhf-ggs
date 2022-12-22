const Tournament = require('../../models/tournament');

module.exports = {
  index,
  create,
  remove,
  edit,
  toggleAdd,
  myIndex
};

async function index(req, res) {
  const tournaments = await Tournament.find({});
  res.json(tournaments);
};

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    req.body.username = req.user.name;
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
  try {
    await Tournament.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
      )
      const updatedItem = await Tournament.find({
        user: req.user._id,
      })
    res.json(updatedItem);
  } catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function toggleAdd(req, res) {
  const tournament = await Tournament.findById(req.body.id)
  if (tournament.usersArray.includes(req.user._id)) {
    tournament.usersArray.remove(req.user._id)
  } else {
    tournament.usersArray.push(req.user._id)
  }
  await tournament.save()
  res.json(tournament)
}

async function myIndex(req, res) {
  const mytournaments = await Tournament.find({usersArray: req.user._id});
  res.json(mytournaments);
};