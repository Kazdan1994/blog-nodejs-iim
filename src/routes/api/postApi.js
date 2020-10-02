const PostApiController = require('../../controllers/postApiController');

module.exports = function (app) {
    app.get('/api/posts', PostApiController.index)
    app.get('/api/posts/:post', PostApiController.show)
}