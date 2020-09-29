const express = require('express');
const app = express()

require('./loaders')(app)

app.listen(3000, function () {
    console.log('Server démarré sur http://localhost:3000');
})
