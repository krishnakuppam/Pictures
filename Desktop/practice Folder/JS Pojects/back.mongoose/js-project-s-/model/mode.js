const mongo = require('mongoose');

const mondodb = new mongo.Schema({
    name: String,
    age: Number,
    city: String
});
module.exports = mongo.model('User', mondodb);