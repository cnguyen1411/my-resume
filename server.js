const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public_html'));
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');




app.get('/',(req,res) =>{
    //res.send('<h1>hello express</h1>');
    res.render('index.hbs');
});


app.listen(port,()=>{
    console.log(`Server is on ${port}`);
});