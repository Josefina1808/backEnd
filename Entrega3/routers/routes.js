const res = require("express/lib/response")

function getRoot(req, res) {
    res.send("Hola index")
}

function getLogin(req, res) {
    if(req.isAuthenticated()) {
        var user = req.user
        console.log("Usuario logeado")

        res.send('login-ok')
    } else {
        res.sendFile(__dirname + '/views/login.hbs')
    }
}

function postLogin(req, res) {
    var user = req.user

    res.sendFile(__dirname + '/views/main.hbs')
}


function getFailSignup(req, res) {
    res.send("Fail to signup")
}

function getSignup(req, res) {
    res.sendFile(__dirname + "/views/register.hbs")
}

function postSignup(req, res) {
    var user = req.user

    res.sendFile(__dirname + '/views/main.hbs')
}

module.exports = {
    getRoot,
    getLogin,
    postLogin,
    getSignup,
    postSignup,
    getFailSignup
}