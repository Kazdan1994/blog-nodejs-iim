const User = require("../db/models/userModel");

exports.register = async function (req, res) {
    res.render('register', {
        title: 'Inscription'
    });
}

exports.createAccount = async function (req, res) {
    const user = await User.create(req.body);

    res.render('index', {
        title: 'Connected',
        posts: [],
        user
    });
}
