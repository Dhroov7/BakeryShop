const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')
const multer = require('multer')
const upload = multer({dest:'uploads/'})
const fs = require('file-system')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine','hbs')

app.use("/",express.static(__dirname + "/public"))

app.use(session({
    secret: 'some very secret thing',
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

//file upload using multer
app.post('/photoup',upload.single('photo'),(req,res) => {
    fs.readFile(req.file.path,(err,data) => {
        fs.writeFile('public/images/'+req.file.originalname,data,(err) => {
            fs.unlink(req.file.path,() => {})
        })
    })

    res.send('File Uploaded')
})

app.use('/pages',require('./routes/pages'))
app.use('/user',require('./routes/user'))

app.listen(9818,() => {
    console.log("Server started on http://localhost:9818")
})