const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/auth');

module.exports = function (app) {
    app.get('/register', AuthController.register);
    app.get('/login', AuthController.login);
    app.get('/logout', AuthController.logout);
    app.post('/register', AuthMiddleware.createAccount, AuthController.register)
    app.post('/login', AuthMiddleware.signin, AuthController.login)
}
