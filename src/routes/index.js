const { Router } = require('express');
const post = require('./web/post');
const auth = require('./web/auth');
const postApi = require('./api/postApi');

module.exports = function () {
    const app = Router();

    postApi(app);
    post(app);
    auth(app);

    return app;
}
