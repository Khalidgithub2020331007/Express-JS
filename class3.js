var express =require("express")
var app=express()

app.get('/',function(req,res){
    res.send("Hello this is from Server side response");
});

app.listen(3000);
app.post('/form',function(req,res){
    res.send("Hii this is the post request get on server side");
});
app.get('/hello',function(req,res){
    res.send("This is a get response on hello site.")
});
app.all('/all',function(req,res){
    res.send("All reqiest for get and post.");
})