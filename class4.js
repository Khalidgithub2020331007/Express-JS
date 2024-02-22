var express=require("express")
var app=express()
app.get('/',function(req,res){
    res.send("This is a get URL.");
});
app.post('/',function(req,res){
    res.send("This is a Post URL");
});
app.put('/',function(req,res){
    res.send("This is a Put URL.")
});
app.delete('/',function(req,res){
    res.send("This is a Delete URL.")
})
app.listen(3000);