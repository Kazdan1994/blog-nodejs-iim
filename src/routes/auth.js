const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/auth');

module.exports = function (app) {
    app.get('/register', AuthController.register);
    app.post('/register', AuthMiddleware.createAccount, AuthController.register)
}
