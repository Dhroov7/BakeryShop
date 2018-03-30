const route = require('express').Router()
const passport = require('../passport')
const users = require('../db/models').users

route.get('/login', (req, res) => {
    res.render('login')
})

route.get('/signup', (req, res) => {
    res.render('signup')
})

route.post('/signup', (req, res) => {
    users.create({
        username: req.body.username,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        zipCode: req.body.zipCode
    }).then(() => {
        res.redirect('/user/login')
    })
})

route.post('/login', passport.authenticate('local', {
    successRedirect: '/pages/catalog',
    failureRedirect: '/user/login'
}));


exports = module.exports = route