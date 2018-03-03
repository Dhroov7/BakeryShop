const LocalStrategy = require('passport-local').Strategy
const user = require('../db/models').user

const localStrategy = new LocalStrategy(
    (username,password,done) => {
        user.findOne({
            where:{
                username:username
            }
        }).then((user) => {
            if(!user){
                return done(null,false,{message:"Wrong username"})
            }else if(password===password){
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