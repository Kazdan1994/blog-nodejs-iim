const PostController = require('../controllers/postController');
const PostMiddleware = require('../middlewares/auth');

module.exports = function (app) {
    app.get('/', PostMiddleware.isConnected, PostController.index)
    app.get('/post/:post', PostMiddleware.isConnected, PostController.show)
}
