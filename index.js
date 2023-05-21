const express = require('express');
const app = require('./server');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./db');


//set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set up the database
const db = process.env.Database_URL;

//connect to the database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err));


//controller for register Student
app.post('/student', newStudent);

async function newStudent(req, res) {
    try {
        const { name, grade1, grade2, grade3 } = req.body;
        console.log("request body : " + JSON.stringify(req.body));
        const student = await Student.create({ name, grade1, grade2, grade3 });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error registering new student please try again.');
    }
}



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server Started');
    })