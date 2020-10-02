const User = require('../db/models/userModel');

exports.register = async function (req, res) {
    res.render('register', {
        title: 'Inscription',
    });
}

exports.login = async function (req, res) {
    res.render('login', {
        title: 'Se connecter'
    })
}

exports.logout = async function (req, res) {
    await User.findOneAndUpdate({
        isConnected: true
    }, {
        isConnected: false
    })
    res.redirect('/login');
}
