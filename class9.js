var express=require('express')
var app=express();
var bodyParser=require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 
app.set('view engine','pug');
app.set('views','./viewsClass9')

app.get('/',function(req,res)
{
    res.render('form')
});
app.post('/',function(req,res){
    res.send("Name is "+req.body.name +" and email is "+req.body.email);
})
app.listen(3000)