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

route.get('/getProducts', (req, res) => {
    products.findAll({}).then(function (data) {
        // console.log(data)
        res.send(data)
    })
})

exports = module.exports = route