
const mysql = require('mysql')
const {mysql_database}= require('./config')

const connection = mysql.createConnection(mysql_database)


connection.connect((err,conn)=>{
if (err) {
    console.log('Hay un error al conectarse')
}
else{
    console.log('conexion exitosa')
    return conn
}

})

module.exports = connection