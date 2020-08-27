const express = require('express');
const users = require('./users-model');
const router = express.Router();

router.get('/', (req, res) => {
	users
		.getUsers()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});
router.post('/', (req, res) => {
	const user = req.body;
	users
		.addUser(user)
		.then(user => {
			console.log(user);
			res.status(200).json(user);
		})
		.catch(err => {
			res.status(500).json({ message: 'error' });
		});
});

module.exports = router;