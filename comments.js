//create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

//connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', {useNewUrlParser: true, useUnifiedTopology: true});

//create schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});
