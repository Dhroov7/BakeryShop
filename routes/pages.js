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

route.post('/addProduct', (req, res) => {
    products.create({
        name: req.body.name,
        price: parseInt(req.body.price)
    })

    res.redirect('/pages/admin')
})

route.get('/getProducts', (req, res) => {
    console.log(typeof products)
    res.send(products)
})

exports = module.exports = route
