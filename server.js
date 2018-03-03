const express = require('express')
const app = express()

app.set('view engine','hbs')

app.use('/pages',require('./routes/pages'))

app.listen(9818,() => {
    console.log("Server started on http://localhost:9818")
})