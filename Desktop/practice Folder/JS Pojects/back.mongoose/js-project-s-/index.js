const express = require('express');
const mongoose = require('mongoose');
const back = express();

const User = require('./model/mode');


mongoose.connect('mongodb+srv://amongwith:amongwith@cluster0.tltfv96.mongodb.net/').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
}
);










back.get('/', (req, res) => {
    res.send('Hello World!');
});


back.listen(3009, () => {
    console.log('Server is running on port 3009');
});