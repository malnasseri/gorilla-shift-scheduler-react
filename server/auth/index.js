const express = require('express')
const router = express.Router()
const passport = require('../passport')
const db = require("../db/index.js")
const path = require("path");
const User = require('../db/models/user')
const employee = require("../db/models/employee");
const EmployeeSchedule = require("../db/models/employeeSchedule");
const announcements = require("../db/models/announcements")
// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})
// Route to login
router.post('/login', passport.authenticate('local'), (req, res) => {
	res.json({ user: { email: req.user.email, _id: req.user._id, userType: req.user.userType } })
})
// Route to logout
router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})
// Route to signup
router.post('/signup', (req, res) => {
	const { email, password, userType } = req.body
	// ADD VALIDATION
	const newUser = new User({ email, password, userType })
	newUser.save((err, savedUser) => {
		if (err) return res.json(err)
		return res.json(savedUser)
	})
})

module.exports = router