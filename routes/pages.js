const route = require('express').Router()

route.get('/cart',(req,res)=>{
    res.render('cart')
})

route.get('/catalog',(req,res) => {
    res.render('catalog')
})

exports = module.exports = route
