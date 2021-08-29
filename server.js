const express=require('express')
const sequelize=require('./db/index')
const Article=require('./db/models/article')

const app=express()
const PORT=process.env.PORT||3000
app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.sendFile('public/index.html',{root:__dirname})
})
app.get('/:title',()=>{

})

app.listen(PORT,()=>{
    console.log(`Listening one port ${PORT}`)
})

sequelize.sync({force:true})
    .then(res=>{
        // do stuff
    })
    .catch(err=>{
        console.log(err)
    })