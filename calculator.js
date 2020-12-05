const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// urlencoded - to parse data from html form
// extended - allow to post nested objects
app.use(bodyParser.urlencoded({ extended: true }));

// what client getting from server
app.get("/", function (req, res) {
    // __dirname will give a path to a current file
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

// what client posting to server
app.post("/", function (req, res) {
    console.log(req.body);

    // initialy req.body.num1 is parsed as a text
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const sum = num1 + num2;

    res.send("Sum of your numbers is " + sum);
});

// BMI Calculator:
app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    console.log(req.body);
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmi = weight / (height * height);
    res.send("Your BMI is " + bmi);
});

// Starting our app
app.listen(3000, function () {
    console.log("Server started on port 3000");
});
