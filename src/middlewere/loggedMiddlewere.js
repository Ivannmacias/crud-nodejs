
const isLogged = (req,res,next) =>{
    let logged = true
    if (logged) {
        next()
    }else{
        res.send('no puede acceder')
    }
}

exports.isLogged = isLogged