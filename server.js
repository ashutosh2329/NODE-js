const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req, res){
	res.sendFile(__dirname + "/index.html");
	res.send("https://sv443.net/jokeapi/v2/joke/Programming?type=single&contains=debugging&amount=10");
});
app.get("/bmiCalculator",function(req, res){
	res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator",function(req, res){
	var weight = Number(req.body.weight);
	var height = Number(req.body.height);
    var bmi = Math.round(weight/(height*height));
	res.send("The calculated BMI is " + bmi);
});
app.post("/",function(req, res){
	var number1 = Number(req.body.num1);
	var number2 = Number(req.body.num2);
    var result = number1 + number2;
	res.send("The calculated result is " + result);
});


app.listen(3000, function(){
	console.log("server started at 3000 port address");
});