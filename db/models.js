const sequelize = require('sequelize')
const datatypes = sequelize.DataTypes

const db = new sequelize('bakerydb','bakeryuser','bakerypass',{
    dialect:'mysql'
})

const users = db.define('users',{
    username:{
        type:datatypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:datatypes.STRING,
        allowNull:false
    },
    address:{
        type:datatypes.STRING,
        allowNull:false
    },
    city:{
        type:datatypes.STRING,
        allowNull:false
    },
    zipCode:{
        type:datatypes.INTEGER,
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
    },
    category: {
        type: datatypes.STRING,
        allowNull: false
    }
    // },
    // photo:{
    //     type:datatypes.STRING,
    //     allowNull:false
    // }
})

db.sync().then(() => "Database Created")

exports = module.exports = {
    db,
    users,
    products
}