const {DataTypes}=require('sequelize')
const sequelize=require('../index')

const Article=sequelize.define('article',{
    title:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type:DataTypes.STRING,
    },
    slug:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    markdown:{
        type:DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Article