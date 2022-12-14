const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/notes'

//GET/
router.get('/', notesCtrl.index)
//POST/notes
router.post('/new', ensureLoggedIn, notesCtrl.create);
//DELETE/:id
router.delete('/:id', ensureLoggedIn, notesCtrl.deleteNote);

module.exports = router;