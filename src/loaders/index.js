const expressLoader = require('./express');
const ejsLoader = require('./ejs');

module.exports = function (app) {
    expressLoader(app);
    ejsLoader(app);
}
