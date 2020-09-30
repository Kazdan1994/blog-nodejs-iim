const { Router } = require('express');
const post = require('./post');
const auth = require('./auth');

module.exports = function () {
    const app = Router();

    post(app);
    auth(app);

    return app;
}
