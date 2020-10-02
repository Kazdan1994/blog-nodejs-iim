const PostApiController = require('../../controllers/postApiController');

module.exports = function (app) {
    app.get('/api/posts', PostApiController.index)
    app.get('/api/posts/:post', PostApiController.show)
    app.post('/api/posts', PostApiController.create)
    app.put('/api/posts/:post', PostApiController.update)
    app.delete('/api/posts/:post', PostApiController.delete)
}