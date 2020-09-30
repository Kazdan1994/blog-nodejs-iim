const ejs = require("ejs-locals");

module.exports = function (app) {
    app.engine('ejs', ejs);
    app.set('view engine', 'ejs');
}
