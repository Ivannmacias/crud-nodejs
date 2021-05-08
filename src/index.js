const express = require('express')
const app = express()
const connection = require('./connection')
const router = require('./routes/userRouter')
const LoggedMiddlewere = require('./middlewere/loggedMiddlewere')
const path = require('path')

//settings

app.set('title','hecha en nodejs')
app.set('port',' 3000')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

//middlewere
//app.use(LoggedMiddlewere.isLogged)
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))

//rutas
app.get('/' , (req , res)=>{
    res.render('index')
})

//importar rutas de user.js
app.use('/users', router)




app.listen(app.get('port'),()=>{
    console.log('Mi aplicacion '+ app.get('title') +' esta corriendo en el puerto'+app.get('port'))
})

