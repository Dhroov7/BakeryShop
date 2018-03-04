const route = require('express').Router()
const passport = require('../passport')
const user = require('../db/models').user

route.get('/login',(req,res) => {
    res.render('login')
})

route.get('/signup',(req,res) => {
    res.render('signup')
})

route.post('/signup',(req,res) => {
    user.create({
        username:req.body.username,
        password:req.body.password,
        address:req.body.address,
        city:req.body.city,
        zipCode:req.body.zipCode
    }).then(() => {
        res.redirect('/user/signin')
    })
})

route.post('/signin',passport.authenticate('local',{
    successRedirect : '/pages/catalog',
    failureRedirect : '/user/signin'
}))

exports = module.exports = route