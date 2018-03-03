const sequelize = require('sequelize')
const datatypes = sequelize.DataTypes

const db = new sequelize('bakerydb','bakeryuser','akerypass',{
    dialect:'mysql'
})

const user = db.define('users',{
    username:{
        type:datatypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:datatypes.STRING,
        allowNull:false
    }
})

const products = db.define('products',{
    name:{
        type:datatypes.STRING,
        allowNull:false,
        unique:true
    },
    price:{
        type: datatypes.INTEGER,
        allowNull:false
    }
})

db.sync().then(() => "Database Created")

exports = module.exports = {
    db,
    user,
    products
}