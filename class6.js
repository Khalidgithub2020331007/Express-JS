var express=require("express")
var app=express();

// app.use(function(req,res,nex){
//     console.log('A new request recieved at '+new Date().toLocaleString());
//     nex();
// // });
// // app.get('/users',function(req,res){
// //     res.send("Got it")
// // });
// app.use(function(req,res,next){
//     console.log("Start");
//     next();
// });
// app.get('/',function(req,res,next)
// {
//     res.send("Got it.");
//     next();
    
// })
// app.get('/',function(req,res,next)
// {
//     console.log("End Route");
//     next();
// })
app.use('/:age',function(req,res,next){
    if(req.params.age<18){
        res.redirect('/fail');
    }
    next();
})
app.get('/fail',function(req,res){
    res.send("You are under 18");
});
app.get('/:age',function(req,res){
    res.send("Your age is :"+req.params.age)
})
app.listen(3000)