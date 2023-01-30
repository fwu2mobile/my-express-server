const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello world</h1>")


})

app.get("/contact", function(req, res){

    res.send("Contact me at : fwu2mobile@gmail.com");

})

app.get("/about", function(req, res){

    res.send("I'm a software engineer.");

})

app.get("/hobbies", function(req,res){
    res.send("<ul><li>coffee</li></ul>"      );
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
}); //port

