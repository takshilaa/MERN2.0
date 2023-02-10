const express =require ("express");
const bodyParser= require("body-parser");
const request=require("request");
const app=express();

// All the static files eg. styles.css or images can be stored in one folder , here public
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
 
app.get("/", function(req,res){
    res.sendFile(__dirname +"/signup.html")

})
app.post("/",function(req,res){

    var firstName=req.body.fName;
    var lastName=req.body.lName;
    var email = req.body.eMail;

    console.log(firstName,lastName,email);  

})


app.listen(3000,function(req,res)
{
    console.log("server 3000 is working!!!");
})