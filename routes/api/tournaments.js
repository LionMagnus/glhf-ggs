const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const tournamentsCtrl = require('../../controllers/api/tournaments');

router.post('/', ensureLoggedIn, tournamentsCtrl.create);
router.get('/', ensureLoggedIn, tournamentsCtrl.index);
router.delete('/:id', ensureLoggedIn, tournamentsCtrl.remove);
router.put('/edit/:id', ensureLoggedIn, tournamentsCtrl.edit);

module.exports = router