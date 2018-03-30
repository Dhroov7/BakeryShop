const passport = require('passport')
const strategies = require('./strategies')
const users = require('../db/models').users

passport.use(strategies.localStrategy)

passport.serializeUser(function (user,done) {
    done(null,user.id)
})

passport.deserializeUser(function (userid,done) {
    users.findOne({
        where:{
            id:userid
        }
    }).then((user) => {
        done(null,user)
    }).catch((err) => {
        done(err)
    })
})

exports = module.exports = passport