const {Sequelize}=require('sequelize')

const sequelize = new Sequelize('immerva-blog','postgres','testpassword',{
    dialect: 'postgres',
    port:'6969'
})

module.exports = sequelize