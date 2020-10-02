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
