const express = require('express');
const path = require ('path');

const app = express();

var PORT = process.env.PORT || 9000;


app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname + '/public/basic/index.html')));
app.get('/aboutus', (req,res) => res.sendFile(path.join(__dirname + '/public/basic/aboutus.html')));
app.get('/contact', (req,res) => res.sendFile(path.join(__dirname + '/public/basic/contact.html')));

app.get('/issue1/1', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/1.html')));
app.get('/issue1/2', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/2.html')));
app.get('/issue1/3', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/3.html')));
app.get('/issue1/4', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/4.html')));
app.get('/issue1/5', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/5.html')));
app.get('/issue1/6', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/6.html')));
app.get('/issue1/7', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/7.html')));
app.get('/issue1/8', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue1/8.html')));

app.get('/issue2/1', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue2/1.html')));
app.get('/issue2/2', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue2/2.html')));
app.get('/issue2/3', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue2/3.html')));
app.get('/issue2/4', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue2/4.html')));
app.get('/issue2/5', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue2/5.html')));
app.get('/issue2/6', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue2/6.html')));
app.get('/issue2/7', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue2/7.html')));
app.get('/issue2/8', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue2/8.html')));

app.get('/issue3/1', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue3/1.html')));
app.get('/issue3/2', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue3/2.html')));
app.get('/issue3/3', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue3/3.html')));
app.get('/issue3/4', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue3/4.html')));
app.get('/issue3/5', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue3/5.html')));
app.get('/issue3/6', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue3/6.html')));
app.get('/issue3/7', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue3/7.html')));
app.get('/issue3/8', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue3/8.html')));

app.get('/issue4/1', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue4/1.html')));
app.get('/issue4/2', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue4/2.html')));
app.get('/issue4/3', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue4/3.html')));
app.get('/issue4/4', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue4/4.html')));
app.get('/issue4/5', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue4/5.html')));
app.get('/issue4/6', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue4/6.html')));
app.get('/issue4/7', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue4/7.html')));
app.get('/issue4/8', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue4/8.html')));

app.get('/issue5/1', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue5/1.html')));
app.get('/issue5/2', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue5/2.html')));
app.get('/issue5/3', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue5/3.html')));
app.get('/issue5/4', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue5/4.html')));
app.get('/issue5/5', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue5/5.html')));
app.get('/issue5/6', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue5/6.html')));
app.get('/issue5/7', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue5/7.html')));
app.get('/issue5/8', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue5/8.html')));

app.get('/issue6/1', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue6/1.html')));
app.get('/issue6/2', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue6/2.html')));
app.get('/issue6/3', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue6/3.html')));
app.get('/issue6/4', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue6/4.html')));
app.get('/issue6/5', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue6/5.html')));
app.get('/issue6/6', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue6/6.html')));
app.get('/issue6/7', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue6/7.html')));
app.get('/issue6/8', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue6/8.html')));


app.get('/issue7/1', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue7/1.html')));
app.get('/issue7/2', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue7/2.html')));
app.get('/issue7/3', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue7/3.html')));
app.get('/issue7/4', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue7/4.html')));
app.get('/issue7/5', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue7/5.html')));
app.get('/issue7/6', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue7/6.html')));
app.get('/issue7/7', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue7/7.html')));
app.get('/issue7/8', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue7/8.html')));

app.get('/issue8/1', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue8/1.html')));
app.get('/issue8/2', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue8/2.html')));
app.get('/issue8/3', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue8/3.html')));
app.get('/issue8/4', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue8/4.html')));
app.get('/issue8/5', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue8/5.html')));
app.get('/issue8/6', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue8/6.html')));
app.get('/issue8/7', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue8/7.html')));
app.get('/issue8/8', (req,res) => res.sendFile(path.join(__dirname + '/public/Issue8/8.html')));

app.listen(PORT);