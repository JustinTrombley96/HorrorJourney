const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require('../config/secrets.js');
const Users = require("./auth-model.js");


//User authentication
router.post('/register', (req, res) => {
	let user = req.body;
	const rounds = process.env.HASH_ROUNDS || 8;
	const hash = bcrypt.hashSync(user.password, rounds);
	user.password = hash;

	Users.add(user)
	.then(saved => {
		console.log('shit', saved);
		res.status(201).json(saved);
	})
	.catch(error => {
		console.log(error);
		res.status(500).json({
			message: error.message
		});
	});

})

router.post('/login', (req, res) => {
	let { email, password } = req.body;

	Users.findBy({ email })
	.then(([user]) => {
		if(user && bcrypt.compareSync(password, user.password)){
			const token = generateToken(user);
			res.status(200).json({
				message: 'Login Successful', token
			});
		} else {
			res.status(401).json({
				message: error.message
			});
		};
	})
	.catch(error => {
		console.log(error);
		res.status(500).json({
			message: 'error logging in user'
		});
	});
});

router.get('/users', (req, res) => {
	Users.find()
		.then(users => {
			res.json(users);
		})
		.catch(err => res.send(err));
});

function generateToken(user){
	const payload = {
		userId: user.id,
		email: user.email,
		password: user.password
	};
	const secret = secrets.jwtSecret;
	const options = {
		expiresIn: '1w'
	};
	return jwt.sign(payload, secret, options);
}

module.exports = router;