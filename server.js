const express = require('express');
const path = require ('path');

const app = express();

var PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.get('/aboutus', (req,res) => res.sendFile(path.join(__dirname + '/public/aboutus.html')));

app.get('/issue1/1', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/1.html')));
app.get('/issue1/2', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/2.html')));
app.get('/issue1/3', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/3.html')));
app.get('/issue1/4', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/4.html')));
app.get('/issue1/5', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/5.html')));
app.get('/issue1/6', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/6.html')));
app.get('/issue1/7', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/7.html')));
app.get('/issue1/8', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/8.html')));



app.listen(PORT);