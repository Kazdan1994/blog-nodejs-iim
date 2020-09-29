const ejs = require("ejs").__express;

module.exports = function (app) {
    app.engine('ejs', ejs);
    app.set('view engine', 'ejs');
}
