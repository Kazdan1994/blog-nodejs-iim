const express = require('express');
const path = require('path');
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Bonjour tout le monde</h1>');
})

app.use('/', express.static(path.resolve(__dirname, '..\\public')));

app.listen(3000, function () {
    console.log('Server démarré sur http://localhost:3000');
})
