const express = require("express");
// app usually used to represent express module
const app = express();

// best practise to use short version
// req for request
// res for responce
app.get("/", function (request, responce) {
    responce.send("Hello");
});

app.get("/contact", function (request, responce) {
    responce.send("Conact me");
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
})
