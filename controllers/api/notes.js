const Note = require('../../models/note');

module.exports = {
  create,
  index,
  deleteNote
}

async function index(req, res) {
  const notes = await Note.find({});
  res.json(notes)
  console.log(notes);
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteNote(req, res) {
  try {
    req.body.user = req.user._id;
    const note = Note.findByIdAndDelete(req.params.id, req.user._id);
    res.json(note);
  } catch (err) {
    res.status(400).json(err)
  }
}