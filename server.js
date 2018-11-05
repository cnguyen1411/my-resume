const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public_html'));
hbs.registerPartials(__dirname + '/public_html/partials');
app.set('view engine', 'hbs');

app.use((req,res,next) =>{
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`
    console.log(log);
    fs.appendFile('server.log', log +'\n', (err) =>{
        if(err){console.log('Unable to append to server.log');}
    });
    next();
});


app.get('/',(req,res) =>{
    res.render('index.hbs');
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});