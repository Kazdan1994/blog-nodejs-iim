exports.register = async function (req, res) {
    res.render('newuser', {
        title: 'Inscription'
    });
}
