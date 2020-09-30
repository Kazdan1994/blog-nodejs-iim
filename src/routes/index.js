const { Router } = require('express');
const post = require('./post');

module.exports = function () {
    const app = Router();

    post(app);

    return app;
}
