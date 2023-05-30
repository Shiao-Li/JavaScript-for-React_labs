module.exports.login = (username,password)=>{
    if(!username && !password) return console.log("No puedes ingresar")
    console.log(`Welcome ${username}`)
}
module.exports.saludo = ()=>{
    console.log("TEST 1")
}

module.exports.LIKES = 150