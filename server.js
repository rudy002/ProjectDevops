const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Student = require('./db');
// Vos autres routes et middleware ici

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//exctract the data from the form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Register a new student in the database
app.post('/student', newStudent);

async function newStudent(req, res) {
    try {
        const { name, grade1, grade2, grade3 } = req.body;
        console.log("request body : " + req.body);
        const student = new Student({ name, grade1, grade2, grade3 });
        await student.save();
        res.status(200).send('Student registered successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error registering new student please try again.');
    }
}

module.exports = app;
