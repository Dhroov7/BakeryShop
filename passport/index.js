const passport = require('passport')
const strategies = require('./strategies')
const user = require('../db/models').user

passport.use(strategies.localStrategy)

passport.serializeUser(function (user,done) {
    done(null,user.id)
})

passport.deserializeUser(function (userid,done) {
    user.findOne({
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