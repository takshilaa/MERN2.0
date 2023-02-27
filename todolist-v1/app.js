const express = require("express");
const bodyParser=require("body-parser");

const app=express();
var items=["buy food","cook"];

// using ejs as its view engine..Has to be placed below express()
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    var today=new Date();

    var options ={

    weekday:"long",
    day:"numeric",
    month : "long"
};

var day = today.toLocaleString("en-US", options);
 
        res.render("list", {kindOfDay : day, newListItems: items  });
    
});

app.post("/", function(req,res){

    // Here we grab the value of what's inside the our text box
    //<input type="text" name="newItem" > from list.js
    var item= req.body.newItem;

    items.push(item);
    res.redirect("/");


})



app.listen(3000,function(req,res){
    console.log("Server 3000 is on !!!! ");
});