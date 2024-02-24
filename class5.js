var express=require("express")
var app=express()

app.get('/',function(req,res){
    res.send("Some Information in Get function.");
});

app.get('/:id[a-z,0-9]{3}',function(req,res){
    res.send("Some Information with id in Get function.Id :"+req.params.id);
});
app.get('/users/:name/:id',function(req,res){
    res.send("User name is "+req.params.name+" and Id :"+req.params.id);
});
app.get('*',function(req,res){
    res.send("URL in not working");
});

app.listen(3000);