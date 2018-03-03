const route = require('express').Router()
const passport = require('../passport')
const user = require('../db/models').user

route.get('/signin',(req,res) => {
    res.render('signin')
})

route.get('/signup',(req,res) => {
    res.render('signup')
})

route.post('/signup',(req,res) => {
    user.create({
        username:req.body.username,
        password:req.body.password
    }).then(() => {
        res.redirect('/user/signin')
    })
})

route.post('/signin',passport.authenticate('local',{
    successRedirect : '/pages/catalog',
    failureRedirect : '/user/signin'
}))

exports = module.exports = route