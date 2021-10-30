const {Sequelize}=require('sequelize')

const sequelize = new Sequelize('immerva-blog','postgres',process.env.DB_PASSWORD,{
    dialect: 'postgres',
    port:'6969'
})

module.exports = sequelize