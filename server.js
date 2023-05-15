const express = require('express');
//for interacting with the frontend
const path = require('path');

const app = express();

app.get('/api',  (req, res) => {
    res.send('Hello World from the API');
    });
app.get('/api/test', (req, res) => {
    res.send('Test Hello');
    });

    app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;