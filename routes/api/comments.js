const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const commentsCtrl = require('../../controllers/api/comments');

router.post('/:id', ensureLoggedIn, commentsCtrl.create);

module.exports = router;