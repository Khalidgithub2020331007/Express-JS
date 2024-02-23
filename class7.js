var express = require("express");
var app = express();

app.set('view engine', 'pug');
app.set('views', './views'); // Corrected path to the views directory

app.get('/home', function(req, res) {
    res.render('home',{
        title:"Home Page",
   users:{name:"Khalid",age:"21"}
    });
});

app.listen(3000);
