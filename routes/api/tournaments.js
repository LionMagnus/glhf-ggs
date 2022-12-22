const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const tournamentsCtrl = require('../../controllers/api/tournaments');

router.get('/', ensureLoggedIn, tournamentsCtrl.index);
router.post('/new', ensureLoggedIn, tournamentsCtrl.create);
router.delete('/:id', ensureLoggedIn, tournamentsCtrl.remove);
router.put('/edit/:id', ensureLoggedIn, tournamentsCtrl.edit);
router.post('/', ensureLoggedIn, tournamentsCtrl.toggleAdd);
router.get('/mytournaments', ensureLoggedIn, tournamentsCtrl.myIndex);

module.exports = router;