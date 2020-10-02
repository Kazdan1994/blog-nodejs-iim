const PostController = require('../controllers/postController');
const PostMiddleware = require('../middlewares/auth');

module.exports = function (app) {
    app.get('/', PostMiddleware.isConnected, PostController.index)
    app.get('/post/new', PostMiddleware.isConnected, PostController.new)
    app.get('/post/edit/:post', PostMiddleware.isConnected, PostController.edit)
    app.get('/post/:post', PostMiddleware.isConnected, PostController.show)
    app.post('/post/new', PostMiddleware.isConnected, PostController.create)
}
