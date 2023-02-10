const express= require("express");
const  https = require("https");
const bodyParser=require("body-parser");
const { query } = require("express");


const app=express();

app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/index.html")
    
});

app.post("/",function(req,res){
    const city = req.body.cityName;
    const apikey="2cb81d768894ab4feef9ff55b7db06db";
    const unit= "metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units="+unit;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data)
        {
            const weatherData = JSON.parse(data);
            const temp= weatherData.main.temp; 
            const weatherDescription =weatherData.weather[0].description;
            // console.log(temp);
            // console.log(weatherDescription);
            const icon = weatherData.weather[0].icon;
            const imageUrl ="http://openweathermap.org/img/wn/"+icon +"@2x.png";
            res.write(" <h1>The weather is currently " + weatherDescription + "</h1>");
            res.write( "<h1>The temperature in "+ city +" is " + temp + " degree celcius</h1>");
            res.write("<img src=" + imageUrl + "> ")
            res.send();
            
        })


// Response by app.get .... Here our server is going to send response to the client's browser

        
    })
//We can't habe multiple res.send responses in a single method(app.get)    
    //res.send("Server is up and running.")

})




app.listen(3000, function()
{
    console.log("Server 3000 is on ");
})