const PostController = require('../controllers/postController');

module.exports = function (app) {
    app.get('/', PostController.index)
    app.get('/post/:post', PostController.show)
}
