exports.register = async function (err, req, res) {
    res.render('register', {
        title: 'Inscription',
        errors: err
    });
}
