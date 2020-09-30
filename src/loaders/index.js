const expressLoader = require('./express');
const ejsLoader = require('./ejs');
const mongooseLoader = require('./mongoose');

module.exports = async function (app) {
    await mongooseLoader();
    expressLoader(app);
    ejsLoader(app);
}
