const express = require('express');
const app = express();
const path = require('path');

// Vos autres routes et middleware ici

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Le reste de votre code

module.exports = app;
