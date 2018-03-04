const route = require('express').Router()

route.get('/cart',(req,res)=>{
    res.render('cart')
})

route.get('/catalog',(req,res) => {
    res.render('catalog')
})

route.get('/admin',(req,res) => {
    res.render('admin')
})

exports = module.exports = route
