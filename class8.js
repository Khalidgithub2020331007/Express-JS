var express=require('express');
var app=express();

app.set('view engine','pug');
app.set('views','./viewClass8');
// app.set('views','./public')
app.use(express.static('publicClass8/css'))
app.get('/',function(req,res){
    res.render('index');

});

app.listen(3000)