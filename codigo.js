const mysql = require('mysql');
const express = require('express');

const app= express();
app.use(express.json())


const db =mysql.createConnection({
host: 'localhost',
user: 'root',
password:'',
database: 'crud_node'

})
db.connect()

app.listen(3000,()=>{
    console.log('funciona');
})



app.get('/' , (req , res)=>{
    const sqlinsert = "SELECT * FROM usuarios"
    db.query(sqlinsert,(error,results,fields)=>{
        if(!error){
        console.log(results);
        res.send(results);
        
        }
        else
        console.log(error);
    })
})

app.post('/api/enviado', (req , res)=>{
  
    const insertar = "INSERT INTO usuarios SET ?"
    /* res.send(req.body.nombre) */
    console.log(req.body)
   /*  const data ={
        nombre: req.body.nombre,
        apellido: req.body.apellido
    } */

    /* db.query(insertar,data,(error,results)=>{
        if(!error){
       res.send('insertado')
       console.log('aceptado')
        }
        else
       res.send(error)
    }) */
})

