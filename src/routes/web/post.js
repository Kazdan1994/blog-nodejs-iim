const PostController = require('../../controllers/postController');
const PostMiddleware = require('../../middlewares/auth');

module.exports = function (app) {
    app.get('/', PostMiddleware.isConnected, PostController.index)
    app.get('/post/edit/:post', PostMiddleware.isConnected, PostController.edit)
    app.get('/post/new', PostMiddleware.isConnected, PostController.new)
    app.get('/post/delete/:post', PostMiddleware.isConnected, PostController.delete)
    app.post('/post/new', PostMiddleware.isConnected, PostController.create)
    app.post('/post/edit/:post', PostMiddleware.isConnected, PostController.update)
    app.get('/post/:post', PostMiddleware.isConnected, PostController.show)
}
