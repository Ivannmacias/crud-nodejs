
const connection = require('../connection')


const getUsers = (req , res)=>{
  const sql = 'select * from users'
  connection.query(sql,(error, result)=>{

if (error) {
 console.log('a ocurrido un error') 
}
else{
  console.log(result)
  res.render('users',{users:result})
}

  })
    
 }

 const getCreateUser = (req , res)=>{
   
   res.render('create_user')
 }

 const getUpdateUser = (req , res)=>{
   const param = req.params.id
   console.log(param)
   const sql='select * from users where id=?'
   connection.query(sql,param,(error,result)=>{
    if (error) {
      console.log('hay un error:'+error)
    } else {
      console.log(result)
      res.render('update_user',{user:result})
    }

   }
   )
   
 }

 const getDeteleDelete = (req , res)=>{
  const param = req.params.id
  console.log(param)
  const sql='select * from users where id=?'
  connection.query(sql,param,(error,result)=>{
   if (error) {
     console.log('hay un error:'+error)
   } else {
     console.log(result)
     res.render('delete_user',{user:result})
   }

  }
  )
   


}
const createUser =(req,res)=>{
  const sql = 'insert into users SET ?'
  const data = req.body
  connection.query(sql,data,(error,result)=>{
    if (error) {
      console.log('ha ocurrido un error')
    } else {
      console.log('usuario resgitrado')
      res.redirect('/users/all')
    }

  })
  //res.render('users',{users:users})

}
const upateUser =(req,res)=>{
  const param= req.params.id
  const  sql =  `update users SET name='${req.body.name}', age = ${req.body.age} where id=${param}`
 connection.query(sql,(error,result)=>{
if (error) {
  console.log('ocurrio un error')
} else {
  console.log('usuario actualizado')
  res.redirect('/users/all')
}

 })
  
}


const deleteUser =(req,res)=>{
  const param= req.params.id
  const  sql =  `delete from users where id = ${param} `
 connection.query(sql,(error,result)=>{
if (error) {
  console.log('ocurrio un error')
} else {
  console.log('usuario eliminado')
  res.redirect('/users/all')
}

 })


}

 module.exports = {
   getUsers,
  getCreateUser,
  getUpdateUser,
  getDeteleDelete,
  createUser,
  upateUser,
  deleteUser

}