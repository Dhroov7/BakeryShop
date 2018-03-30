const LocalStrategy = require('passport-local').Strategy
const users = require('../db/models').users

const localStrategy = new LocalStrategy(
    (username,password,done) => {
        users.findOne({
            where:{
                username:username
            }
        }).then((user) => {
            if(!user){
                return done(null,false,{message:"Wrong username"})
            }else if(user.password===password){
                return done(null,user)
            }else{
                return done(null,false,{message:"Wrong password"})
            }
        }).catch((err) => {
            return done(err)
        })
    }
)

exports = module.exports = {
    localStrategy
}