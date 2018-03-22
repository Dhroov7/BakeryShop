const route = require('express').Router()
const products = require('../db/models').products

route.get('/cart', (req, res) => {
    res.render('cart')
})

route.get('/catalog', (req, res) => {
    res.render('catalog')
})

route.get('/admin', (req, res) => {
    res.render('admin')
})

route.get('/cake', (req, res) => {
    res.render('cake')
})

route.get('/pastry', (req, res) => {
    res.render('pastry')
})

route.get('/snack', (req, res) => {
    res.render('snack')
})

route.get('/bread', (req, res) => {
    res.render('bread')
})

route.post('/addProduct', (req, res) => {
    products.create({
        name: req.body.name,
        price: parseInt(req.body.price),
        category:req.body.categoryPro
    })

    res.redirect('/pages/admin')
})

route.get('/getProducts', (req, res) => {
    console.log(typeof products)
    res.send(products)
})

exports = module.exports = route
