const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req,res)=>{
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apiKey = "d6a2c8a24b4633ca86088bd20297223f";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (data) => {
      console.log(data);
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imggeURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<h1>The Temperature in "+query +" is " + temp + " degree Celcius.</h1>");
      res.write("<img src=" + imggeURL + ">")
      res.send();
    });
  });
});

app.listen(3000, ()=>{
  console.log("Server is running on port 3000.")
})
